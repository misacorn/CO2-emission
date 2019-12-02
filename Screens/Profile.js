import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.arrowBack}
      >
        <Icon type="AntDesign" name="left" />
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
    padding: 25,
    marginTop: 25
  },
  arrowBack: {
    flex: 1,
    width: "100%"
  }
});

export default Profile;
