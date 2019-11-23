import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Content,
  Icon,
  Tab,
  Tabs,
  TabHeading
} from "native-base";

import arrow from "../assets/icons/arrowhead-left.png";
import TipTab from "../navigation/TipTab";
import Housing from "../components/tipPage/Housing";
import Food from "../components/tipPage/Food";
import Traffic from "../components/tipPage/Traffic";
import Goods from "../components/tipPage/Goods";
import Leisures from "../components/tipPage/Leisures";
import Groceries from "../components/tipPage/Groceries";

const Tips = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.backToMain}
        >
          <View style={{ flex: 1 }}>
            <Image style={{ width: 23, height: 23 }} source={arrow} />
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#354052", fontSize: 18, marginBottom: 5 }}>
              #100SmartWays
            </Text>
            <Text style={{ color: "#97A5BC", fontSize: 16 }}>
              To live sustainably
            </Text>
          </View>
          <View style={styles.tipTab}></View>
        </TouchableOpacity>

        <View style={styles.tipTab}>
          {/* <Housing style={{ flex: 1 }} />
          <Food style={{ flex: 1 }} />
          <Traffic style={{ flex: 1 }} />
          <Goods style={{ flex: 1 }} />
          <Leisures style={{ flex: 1 }} />
          <Groceries style={{ flex: 1 }} /> */}
          <TipTab />
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
  tipTab: {
    flex: 1,
    margin: 20
  }
});

export default Tips;
