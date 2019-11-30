import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
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
import Goods from "../components/tipPage/Goods";
import Services from "../components/tipPage/Services";
import Mobility from "../components/tipPage/Mobility";
import Leisure from "../components/tipPage/Leisure";

const TipTab = () => (
  <Container style={styles.container}>
    <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
      <Tab
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
        <Mobility />
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
        <Leisure />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="gift" />
          </TabHeading>
        }
      >
        <Services />
      </Tab>
    </Tabs>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 20,
    marginRight: "auto",
    marginBottom: 20,
    width: "95%",
    position: "absolute",
    zIndex: -1,
    marginTop: -80
    // maxHeight: 60
  }
});

export default TipTab;
