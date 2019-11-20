import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";

import backSkyImage from "../assets/backskyimage.png";
import profileIcon from "../assets/icons/profile-icon.png";

const Main = () => {
  return (
    <ImageBackground
      source={backSkyImage}
      style={{ width: "100%", height: "100%" }}
    >
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image style={{ width: 50, height: 50 }} source={profileIcon}></Image>
          <Text>Calendar</Text>
        </View>
        <View style={styles.summaryData}>
          <Text>Heluuuu</Text>
        </View>
        <View style={styles.detailedData}>
          <Text>Byeeee</Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  summaryData: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  detailedData: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default Main;
