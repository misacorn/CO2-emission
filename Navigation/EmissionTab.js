import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Tab,
  Tabs,
  Text,
  TabHeading,
  StyleProvider
} from "native-base";

import Categories from "../components/mainPage/Categories";
import Transactions from "../components/mainPage/Transactions";

import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";

const EmissionDetails = ({ timePeriod }) => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
        <Tabs
          style={{ borderColor: "#97A5BC", marginLeft: 10, marginRight: 10 }}
          tabBarUnderlineStyle={{ backgroundColor: "#191919" }}
        >
          <Tab
            heading={
              <TabHeading>
                <Text style={{ color: "#191919" }}>Categories</Text>
              </TabHeading>
            }
          >
            <Categories timePeriod={timePeriod} />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={{ color: "#191919" }}>Transactions</Text>
              </TabHeading>
            }
          >
            <Transactions timePeriod={timePeriod} />
          </Tab>
        </Tabs>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    marginRight: "auto",
    marginBottom: 25
  }
});

export default EmissionDetails;
