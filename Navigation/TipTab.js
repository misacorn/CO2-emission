import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Tab,
  Tabs,
  Text,
  TabHeading,
  Content,
  Icon
} from "native-base";

import Housing from "../components/tipPage/Housing";
import Food from "../components/tipPage/Food";
import Traffic from "../components/tipPage/Traffic";
import Goods from "../components/tipPage/Goods";
import Leisures from "../components/tipPage/Leisures";
import Groceries from "../components/tipPage/Groceries";

const EmissionDetails = () => {
  return (
    <Container style={styles.container}>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: "#FFFFFF" }}>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: "#191919" }}>Categories</Text>
              {/* <Container>
                <Content>
                  <Icon
                    type="FontAwesome"
                    name="home"
                    style={{ color: "#97A5BC" }}
                  />
                </Content>
              </Container> */}
            </TabHeading>
          }
        >
          <Housing />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: "#191919" }}>Transactions</Text>
              {/* <Container>
                <Content>
                  <Icon
                    type="FontAwesome"
                    name="cutlery"
                    style={{ color: "#97A5BC" }}
                  />
                </Content>
              </Container> */}
            </TabHeading>
          }
        >
          <Food />
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
