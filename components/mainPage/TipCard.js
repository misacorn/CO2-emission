import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import hiking from "../../assets/hiking.png";

const TipCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Tips")}
    >
      <View style={styles.tipImage}>
        <Image style={{ width: 75, height: 55 }} source={hiking} />
      </View>
      <View>
        <View style={styles.tipText}>
          <Text
            style={{
              fontSize: 16,
              color: "rgb(25, 25, 25)",
              fontWeight: "600"
            }}
          >
            #100smartways
          </Text>
          <Text style={{ fontSize: 14, color: "rgb(151, 165, 188)" }}>
            Discover 100 smart ways to live more sustainable
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    marginTop: -50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "rgba(41, 50, 60, 0.15)",
    shadowRadius: 5,
    shadowOpacity: 5,
    padding: 20,
    minHeight: 120
  },
  cardContainer: {},
  tipImage: {
    padding: 10,
    width: 110
  },
  tipText: {
    maxWidth: 220,
    textAlign: "justify"
  }
});

export default TipCard;
