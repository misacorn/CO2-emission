import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";

import backSkyImage from "../assets/backskyimage.png";
import profileIcon from "../assets/icons/profile-icon.png";
<<<<<<< HEAD:Screens/Home.js
import TipCard from "../components/TipCard";
=======
import TipCard from "./TipCard";
>>>>>>> 490f8642ea40b204b3a826ae8aff75fdd94c1a02:components/Main.js

const Home = props => {
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
      <View style={styles.container}>
        {/* <ScrollView> */}
        <View style={styles.navbar}>
<<<<<<< HEAD:Screens/Home.js
          <TouchableHighlight
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Image style={{ width: 40, height: 40 }} source={profileIcon} />
          </TouchableHighlight>
=======
          <Image style={{ width: 40, height: 40 }} source={profileIcon} />
>>>>>>> 490f8642ea40b204b3a826ae8aff75fdd94c1a02:components/Main.js
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
          <TipCard />
          <View style={styles.dataContainer}>
            <Text>Byeeee</Text>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </ImageBackground>
  );
};

export default Home;

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

  dataContainer: {
    // justifyContent: "center",
    // alignItems: "center"
    marginTop: 200
  }
});
