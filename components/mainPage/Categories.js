import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import config from "../../config";

const Categories = () => {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    const url = `${config.BASE_URL}/v1/byDomain/${config.CUSTOMER_ID}?auditUser=${config.AUDIT_USER}&timePeriod=Monthly`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${config.AUTHORIZATION}`
      }
    })
      .then(response => response.json())
      .then(responseJson => setDomains(responseJson.listbyDomain))
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {domains.length > 0 && (
        <FlatList
          data={domains}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.co2Amount}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.domain}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Categories;
