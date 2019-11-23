import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";

import backSkyImage from "../assets/backskyimage.png";
import profileIcon from "../assets/icons/profile-icon.png";

import TipCard from "../components/TipCard";
import EmissionDetails from "../components/EmissionDetails";

const Main = ({ navigation }) => {
  console.log(navigation);

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
    <ScrollView>
      <ImageBackground
        source={backSkyImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image style={{ width: 40, height: 40 }} source={profileIcon} />
            </TouchableOpacity>
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
            <TipCard navigation={navigation} />
            <View style={styles.dataContainer}>
              <EmissionDetails />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Main;

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
    alignItems: "center",
    minHeight: 300
  },
  detailedData: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "white"
  },

  dataContainer: {
    // justifyContent: "center",
    // alignItems: "center"
    marginTop: 100,
    minHeight: 500
  }
});
