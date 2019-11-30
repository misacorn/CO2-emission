import React from "react";
import { StyleSheet } from "react-native";
import { Container, Tabs, Tab, TabHeading, Icon } from "native-base";

import Housing from "../components/tipPage/Housing";
import Food from "../components/tipPage/Food";
import Goods from "../components/tipPage/Goods";
import Services from "../components/tipPage/Services";
import Mobility from "../components/tipPage/Mobility";
import Leisure from "../components/tipPage/Leisure";

const TipTab = ({ impact }) => (
  <Container style={styles.container}>
    <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="home" />
          </TabHeading>
        }
      >
        <Housing impact={impact} />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="cutlery" />
          </TabHeading>
        }
      >
        <Food impact={impact} />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="car" />
          </TabHeading>
        }
      >
        <Mobility impact={impact} />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="shopping-cart" />
          </TabHeading>
        }
      >
        <Goods impact={impact} />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="plane" />
          </TabHeading>
        }
      >
        <Leisure impact={impact} />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="gift" />
          </TabHeading>
        }
      >
        <Services impact={impact} />
      </Tab>
    </Tabs>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "95%",
    position: "absolute",
    zIndex: -1,
    marginTop: -80,
    //height: "100%"
  }
});

export default TipTab;
