import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  ScrollableTab
} from "native-base";

import Housing from "../components/tipPage/Housing";
import Food from "../components/tipPage/Food";
import Traffic from "../components/tipPage/Traffic";
import Goods from "../components/tipPage/Goods";
import Leisures from "../components/tipPage/Leisures";
import Groceries from "../components/tipPage/Groceries";

const TipTab = () => {
  return (
    <Container style={styles.container}>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: "#FFFFFF" }}
              activeTabStyle={{
                borderBottomColor: "transparent",
                borderBottomWidth: 0
              }}
            >
              <Icon type="FontAwesome" name="home" />
            </TabHeading>
          }
        >
          <Housing />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: "#FFFFFF" }}
              activeTabStyle={{
                borderBottomColor: "transparent",
                borderBottomWidth: 0
              }}
            >
              <Icon type="FontAwesome" name="cutlery" />
            </TabHeading>
          }
        >
          <Food />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: "#FFFFFF" }}
              activeTabStyle={{
                borderBottomColor: "transparent",
                borderBottomWidth: 0
              }}
            >
              <Icon type="FontAwesome" name="car" />
            </TabHeading>
          }
        >
          <Traffic />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: "#FFFFFF" }}
              activeTabStyle={{
                borderBottomColor: "transparent",
                borderBottomWidth: 0
              }}
            >
              <Icon type="FontAwesome" name="shopping-cart" />
            </TabHeading>
          }
        >
          <Goods />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: "#FFFFFF" }}
              activeTabStyle={{
                borderBottomColor: "transparent",
                borderBottomWidth: 0
              }}
            >
              <Icon type="FontAwesome" name="plane" />
            </TabHeading>
          }
        >
          <Leisures />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: "#FFFFFF" }}
              activeTabStyle={{
                borderBottomColor: "transparent",
                borderBottomWidth: 0
              }}
            >
              <Icon type="FontAwesome" name="gift" />
            </TabHeading>
          }
        >
          <Groceries />
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

export default TipTab;
