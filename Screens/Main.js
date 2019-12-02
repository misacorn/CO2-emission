import React, { useState } from "react";
import {
  StyleSheet,
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
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <View>
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={profileIcon}
                  />
                  <View style={styles.circle} />
                </View>
              </TouchableOpacity>
            </View>
            <Dropdown
              data={data}
              value={value}
              pickerStyle={styles.picker}
              dropdownOffset={{ top: 0, left: 0 }}
              containerStyle={styles.dropdown}
              onChangeText={value => setValue(value)}
              inputContainerStyle={{ borderBottomColor: "transparent" }}
              textColor="#97a5bc"
            />
            <View style={styles.oval} />
          </View>
          <View style={styles.summaryData}>
            <EmissionSummary timePeriod={value} />
            <TipCard navigation={navigation} />
          </View>
          <View style={styles.detailedData}>
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
    flex: 1,
    marginTop: 25
  },
  navbar: {
    flex: 1,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  circle: {
    marginTop: 5,
    width: 38,
    height: 38,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    zIndex: -1,
    position: "absolute"
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
  oval: {
    width: 100,
    height: 30,
    borderRadius: 20,
    backgroundColor: "white",
    transform: [{ scaleX: 1 }],
    position: "absolute",
    zIndex: -1,
    marginLeft: 290,
    marginTop: 25
  },
  summaryData: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 500,
    marginTop: -50
  },
  detailedData: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -75,
    zIndex: -1
  },
  dataContainer: {
    marginTop: 70
  }
});
