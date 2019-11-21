import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";

import backSkyImage from "../assets/backskyimage.png";
import profileIcon from "../assets/icons/profile-icon.png";

const Main = () => {
  const [data, setData] = useState([
    {
      value: "Weekly"
    },
    {
      value: "Monthly"
    },
    {
      value: "Yearly"
    }
  ]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(data[1].value), [];
  });
  return (
    <ImageBackground
      source={backSkyImage}
      style={{ width: "100%", height: "100%" }}
    >
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image style={{ width: 40, height: 40 }} source={profileIcon}></Image>
          <Dropdown
            value={value}
            data={data}
            pickerStyle={styles.picker}
            dropdownOffset={{ top: 0, left: 0 }}
            containerStyle={styles.dropdown}
            onChangeText={value => setValue(value)}
            inputContainerStyle={{ borderBottomColor: "transparent" }}
          />
        </View>
        <View style={styles.summaryData}>
          <Text>Heluuuu</Text>
        </View>
        <View style={styles.detailedData}>
          <View style={styles.cardContainer}>
            <Text style={{ backgroundColor: "gray", height: 50 }}>
              #100smartways
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>Byeeee</Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    flex: 1,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dropdown: {
    width: "25%",
    borderColor: "white"
  },
  picker: {
    borderWidth: 0,
    marginTop: 60,
    width: "25%"
  },
  summaryData: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  detailedData: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "white"
  },
  cardContainer: {
    position: "absolute",
    marginTop: -20
  },
  dataContainer: {
    // justifyContent: "center",
    // alignItems: "center"
    marginTop: 60
  }
});

export default Main;
