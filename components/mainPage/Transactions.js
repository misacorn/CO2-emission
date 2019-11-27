import React, { useEffect, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import moment from "moment";

import config from "../../config";
import { transactionsByDomain } from "../../api/transactionsByDomain";

const _ = require("lodash");

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { transactions: [...state.transactions, ...action.transactions] };
    default:
      return state;
  }
};

const initialState = {
  transactions: []
};

const Transactions = ({ timePeriod }) => {
  const domains = [
    "Food",
    "Services",
    "Goods",
    "Mobility",
    "Housing",
    "Leisure"
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log({state});

  useEffect(() => {
    const urls = domains.map(domain =>
      transactionsByDomain(timePeriod, domain)
    );

    urls.map(url =>
      fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${config.AUTHORIZATION}`
        }
      })
        .then(res => res.json())
        .then(res => {
          dispatch({ type: "ADD", transactions: res.listbyTransaction });
        })
        .catch(error => console.log(error))
    );
  }, []);

  const transactionsByDate = [
    ...state.transactions
      .reduce((r, o) => {
        const key = o.merchantName + "-" + o.createdTime.substring(0, 10);

        const item =
          r.get(key) ||
          Object.assign({}, o, {
            co2Amount: 0,
            transactionAmount: 0
          });

        item.co2Amount += o.co2Amount;
        item.transactionAmount += o.transactionAmount;

        return r.set(key, item);
      }, new Map())
      .values()
  ];

  const showTransactions = () =>
    transactionsByDate.map(t => (
      <View key={t.transactionId} style={styles.categorieRow}>
        <Icon
          type="FontAwesome"
          name="cutlery"
          style={{
            marginRight: 10,
            color: "#97a5bc"
          }}
        />
        <View style={{ flex: 1, marginRight: 10 }}>
          <View
            style={{
              justifyContent: "space-between",
              width: "100%",
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{t.merchantName}</Text>
            <Text style={{ color: "#97a5bc" }}>-{t.transactionAmount}€</Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              width: "100%",
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text style={{ color: "#97a5bc" }}>
              {moment(t.createdTime).format("DD-MM-YYYY")}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>{t.co2Amount}kg </Text>
              <Text>CO2</Text>
            </View>
          </View>
        </View>
      </View>
    ));

  return <View style={styles.container}>{showTransactions()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  categorieRow: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: 60
  }
});

export default Transactions;
