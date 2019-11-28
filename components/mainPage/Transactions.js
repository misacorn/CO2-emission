import React, { useEffect, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import moment from "moment";

import { STATUS } from "../../utils";
import config from "../../config";
import { transactionsByDomain } from "../../api/transactionsByDomain";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        transactions: [...state.transactions, ...action.transactions],
        status: STATUS.SUCCESS
      };
    default:
      return state;
  }
};

const initialState = {
  transactions: [],
  status: STATUS.REQUEST,
  error: ""
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
          dispatch({
            type: "ADD",
            transactions: res.listbyTransaction,
            status: STATUS.SUCCESS
          });
        })
        .catch(error => console.log(error))
    );
  }, [timePeriod]);

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
        <View style={{ flex: 1 }}>
          <View style={styles.dataRow}>
            <Text style={{ fontWeight: "bold" }}>{t.merchantName}</Text>
            <Text style={{ color: "#97a5bc" }}>-{t.transactionAmount}€</Text>
          </View>
          <View style={styles.dataRow}>
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

  console.log(timePeriod);

  return (
    <>
      {state.status === STATUS.REQUEST && <Text>Loading...</Text>}
      {state.status === STATUS.SUCCESS && state.transactions.length > 0 && (
        <View style={styles.container}>{showTransactions()}</View>
      )}
      {state.status === STATUS.ERROR && <Text className="error">{error}</Text>}
    </>
  );
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
  },
  dataRow: {
    justifyContent: "space-between",
    // width: "100%",
    flex: 1,
    flexDirection: "row"
  }
});

export default Transactions;
