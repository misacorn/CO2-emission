import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import hiking from "../assets/hiking.png";

const TipCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.tipImage}>
<<<<<<< HEAD
        <Image style={{ width: 65, height: 45 }} source={hiking} />
=======
        <Image style={{ width: 75, height: 55 }} source={hiking} />
>>>>>>> 490f8642ea40b204b3a826ae8aff75fdd94c1a02
      </View>
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
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: "absolute",
<<<<<<< HEAD
    marginTop: -50,
=======
    marginTop: -35,
>>>>>>> 490f8642ea40b204b3a826ae8aff75fdd94c1a02
    flexDirection: "row",
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
