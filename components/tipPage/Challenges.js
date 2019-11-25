import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Tabs, Tab, TabHeading, Icon } from "native-base";

import fullGlobe from "../../assets/icons/full-globe.png";
import halfGlobe from "../../assets/icons/half-globe.png";
import smallGlobe from "../../assets/icons/small-globe.png";

const Challenges = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#97A5BC", fontSize: 14, fontWeight: "bold" }}>
        Challenges
      </Text>
      <Container style={styles.globes}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
          <Tab
            heading={
              <TabHeading>
                <Image source={fullGlobe} style={{ width: 32, height: 32 }} />
              </TabHeading>
            }
          ></Tab>
          <Tab
            heading={
              <TabHeading>
                <Image source={halfGlobe} style={{ width: 32, height: 32 }} />
              </TabHeading>
            }
          ></Tab>
          <Tab
            heading={
              <TabHeading>
                <Image source={smallGlobe} style={{ width: 32, height: 32 }} />
              </TabHeading>
            }
          ></Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon type="FontAwesome" name="remove" />
              </TabHeading>
            }
          ></Tab>
        </Tabs>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50
  },
  globes: {
    flex: 1,
    flexDirection: "row",
    maxWidth: 170,
    marginTop: 20
  }
});

export default Challenges;
