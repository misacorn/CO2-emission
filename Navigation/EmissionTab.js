import React from "react";
import { StyleSheet } from "react-native";
import { Container, Tab, Tabs, Text, TabHeading } from "native-base";

import Categories from "../components/mainPage/Categories";
import Transactions from "../components/mainPage/Transactions";

const EmissionDetails = () => {
  return (
    <Container style={styles.container}>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: "#191919" }}>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: "#191919" }}>Categories</Text>
            </TabHeading>
          }
        >
          <Categories />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: "#191919" }}>Transactions</Text>
            </TabHeading>
          }
        >
          <Transactions />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    marginRight: "auto",
    marginBottom: 25,
    width: "95%"
  }
});

export default EmissionDetails;
