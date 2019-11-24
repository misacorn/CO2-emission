import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { Icon } from "native-base";

import TipTab from "../navigation/TipTab";
import Challenges from "../components/tipPage/Challenges";

const Tips = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.backToMain}
        >
          <View style={{ flex: 1 }}>
            <Icon type="AntDesign" name="left" />
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#354052", fontSize: 18, marginBottom: 5 }}>
              #100SmartWays
            </Text>
            <Text style={{ color: "#97A5BC", fontSize: 16 }}>
              To live sustainably
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.tips}>
          <TipTab />
          <Challenges />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25
  },
  backToMain: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginBottom: 25
  },
  header: {
    flex: 2.25
  },
  tips: {
    flex: 1
  }
});

export default Tips;
