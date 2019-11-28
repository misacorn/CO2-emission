import React, { useState } from "react";
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

import EmissionSummary from "../components/mainPage/EmissionSummary";
import TipCard from "../components/mainPage/TipCard";
import EmissionTab from "../navigation/EmissionTab";

const Main = ({ navigation }) => {
  const data = [
    {
      value: "Weekly"
    },
    {
      value: "Monthly"
    },
    {
      value: "Yearly"
    }
  ];
  const [value, setValue] = useState(data[1].value);

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
              data={data}
              value={value}
              pickerStyle={styles.picker}
              dropdownOffset={{ top: 0, left: 0 }}
              containerStyle={styles.dropdown}
              onChangeText={value => setValue(value)}
              inputContainerStyle={{ borderBottomColor: "transparent" }}
            />
          </View>
          <View style={styles.summaryData}>
            <EmissionSummary timePeriod={value} />
          </View>
          <View style={styles.detailedData}>
            <TipCard navigation={navigation} />
            <View style={styles.dataContainer}>
              <EmissionTab timePeriod={value} />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400
  },
  detailedData: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  dataContainer: {
    marginTop: 70
  }
});
