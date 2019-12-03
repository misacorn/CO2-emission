import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import moment from "moment";

import { STATUS } from "../../utils";
import config from "../../config";
import { transactionsByDomain } from "../../api/transactionsByDomain";

const Transactions = ({ timePeriod }) => {
  const domains = [
    "Food",
    "Services",
    "Goods",
    "Mobility",
    "Housing",
    "Leisure"
  ];

  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState(STATUS.REQUEST);

  useEffect(() => {
    setTransactions([]);
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
          setTransactions(transactions => [
            ...transactions,
            ...res.listbyTransaction
          ]);
        })
        .then(() => setStatus(STATUS.SUCCESS))
        .catch(error => console.log(error))
    );
  }, [timePeriod]);

  const transactionsByDate = [
    ...transactions
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
  ].sort((a, b) =>
    a.createdTime < b.createdTime
      ? 1
      : a.createdTime === b.createdTime
      ? a.merchantName > b.merchantName
        ? 1
        : -1
      : -1
  );

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

  return (
    <>
      {status === STATUS.REQUEST && <Text>Loading...</Text>}
      {status === STATUS.SUCCESS && transactions.length > 0 && (
        <View style={styles.container}>{showTransactions()}</View>
      )}
      {status === STATUS.ERROR && <Text className="error">{error}</Text>}
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
    paddingBottom: 10
  },
  dataRow: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row"
  }
});

export default Transactions;
