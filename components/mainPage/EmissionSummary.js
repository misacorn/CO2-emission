import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { STATUS } from "../../utils";
import config from "../../config";
import { listByDomainUrl } from "../../api/listByDomain";

import DataChart from "./DataChart";

const getTime = timePeriod => {
  switch (timePeriod) {
    case "Weekly":
      return "This Week";
    case "Monthly":
      return "This Month";
    case "Yearly":
      return "This Year";
    default:
      return null;
  }
};

const EmissionSummary = ({ timePeriod }) => {
  const [status, setStatus] = useState(STATUS.REQUEST);
  const [totalCo2Amount, setTotalCo2Amount] = useState("");
  const [amountPerDomain, setAmountPerDomain] = useState([]);

  useEffect(() => {
    const url = listByDomainUrl(timePeriod);
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${config.AUTHORIZATION}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setStatus(STATUS.SUCCESS);
        setTotalCo2Amount(res.totalCo2Amount);
        setAmountPerDomain(res.listbyDomain);
      })
      .catch(error => {
        setStatus(STATUS.ERROR);
        setError(error);
      });
  }, [timePeriod]);

  const showTotalAmount = () => (
    <Text style={{ color: "white", fontSize: 30 }}>{totalCo2Amount}.00</Text>
  );

  return (
    <>
      {status === STATUS.REQUEST && <Text>Loading...</Text>}
      {status === STATUS.SUCCESS && amountPerDomain.length === 0 && (
        <View style={[styles.container, { minHeight: 350 }]}>
          <Text style={{ textTransform: "uppercase", color: "white" }}>
            {getTime(timePeriod)}
          </Text>
          {showTotalAmount()}
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Kg</Text>
            <Text style={{ color: "white" }}> CO2e</Text>
          </View>
        </View>
      )}
      {status === STATUS.SUCCESS && amountPerDomain.length > 0 && (
        <View style={styles.container}>
          <DataChart />
          <View style={styles.dataText}>
            <Text style={{ textTransform: "uppercase", color: "white" }}>
              {getTime(timePeriod)}
            </Text>
            {showTotalAmount()}
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Kg</Text>
              <Text style={{ color: "white" }}> CO2e</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dataText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    lineHeight: 1.43,
    letterSpacing: 0.0107
  }
});

export default EmissionSummary;
