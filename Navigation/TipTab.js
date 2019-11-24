import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Text,
  StyleProvider,
  Tabs,
  Tab,
  TabHeading,
  Icon
} from "native-base";

import Housing from "../components/tipPage/Housing";
import Food from "../components/tipPage/Food";
import Traffic from "../components/tipPage/Traffic";
import Goods from "../components/tipPage/Goods";
import Leisures from "../components/tipPage/Leisures";
import Groceries from "../components/tipPage/Groceries";

const ThemeExample = () => (
  <Container style={styles.container}>
    <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
      <Tab
        style={{ border: 0 }}
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="home" />
          </TabHeading>
        }
      >
        <Housing />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="cutlery" />
          </TabHeading>
        }
      >
        <Food />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="car" />
          </TabHeading>
        }
      >
        <Traffic />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="shopping-cart" />
          </TabHeading>
        }
      >
        <Goods />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="plane" />
          </TabHeading>
        }
      >
        <Leisures />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="gift" />
          </TabHeading>
        }
      >
        <Groceries />
      </Tab>
    </Tabs>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: "auto",
    marginBottom: 25,
    width: "95%"
  }
});

export default ThemeExample;
