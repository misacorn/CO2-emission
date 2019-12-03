import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

import { STATUS } from "../../utils";
import config from "../../config";
import { listByDomainUrl } from "../../api/listByDomain";

const getIcon = domain => {
  switch (domain) {
    case "Leisure":
      return "plane";
    case "Services":
      return "gift";
    case "Goods":
      return "shopping-cart";
    case "Mobility":
      return "bus";
    case "Housing":
      return "home";
    case "Food":
      return "cutlery";
    default:
      return null;
  }
};

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

const Categories = ({ timePeriod }) => {
  const [status, setStatus] = useState(STATUS.REQUEST);
  const [error, setError] = useState("");
  const [domains, setDomains] = useState([]);

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
        setDomains(res.listbyDomain);
      })
      .catch(error => {
        setStatus(STATUS.ERROR);
        setError(error);
      });
  }, [timePeriod]);

  const showCategories = () =>
    domains.map(domain => (
      <View key={domain.domain} style={styles.categorieRow}>
        <Icon
          type="FontAwesome"
          name={getIcon(domain.domain)}
          style={{
            marginRight: 10,
            color: "#97a5bc",
            height: "100%"
          }}
        />
        <View style={{ flex: 1, marginRight: 10 }}>
          <View style={styles.dataRow}>
            <Text style={{ fontWeight: "bold" }}>{domain.domain}</Text>
            <Text style={{ color: "#97a5bc" }}>
              -{domain.transactionAmount}€
            </Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={{ color: "#97a5bc" }}>{getTime(timePeriod)}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>{domain.co2Amount}kg </Text>
              <Text>CO2</Text>
            </View>
          </View>
        </View>
      </View>
    ));

  return (
    <>
      {status === STATUS.REQUEST && <Text>Loading...</Text>}
      {status === STATUS.SUCCESS && domains.length === 0 && <View />}
      {status === STATUS.SUCCESS && domains.length > 0 && (
        <View style={styles.container}>{showCategories()}</View>
      )}
      {status === STATUS.ERROR && <Text className="error">{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10
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

export default Categories;
