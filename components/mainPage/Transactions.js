import React, { useEffect, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
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



  return (
    <View style={styles.container}>
      <Text>Transactions there</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Transactions;
