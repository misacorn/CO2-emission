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
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="cutlery" />
          </TabHeading>
        }
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="car" />
          </TabHeading>
        }
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="shopping-cart" />
          </TabHeading>
        }
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="plane" />
          </TabHeading>
        }
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="gift" />
          </TabHeading>
        }
      ></Tab>
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
