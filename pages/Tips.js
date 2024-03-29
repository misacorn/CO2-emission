import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { Icon } from "native-base";

import ImpactLevels from "../components/tipPage/ImpactLevels";

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
          <ImpactLevels />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    marginTop: 50,
    marginRight: 5
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
