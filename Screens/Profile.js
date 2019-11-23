import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import arrow from "../assets/icons/arrowhead-left.png";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.arrowBack}
      >
        <Image style={{ width: 23, height: 23 }} source={arrow} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text>Profile Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25
  },
  arrowBack: {
    flex: 1,
    width: "100%"
  }
});

export default Profile;
