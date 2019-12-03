import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

import hiking from "../../assets/hiking.png";

const screenWidth = Math.round(Dimensions.get("window").width);

const TipCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Tips")}
    >
      <View style={styles.tipImage}>
        <Image style={{ width: 70, height: 50 }} source={hiking} />
      </View>
      <View>
        <View style={styles.tipText}>
          <Text
            style={{
              fontSize: 16,
              color: "rgb(25, 25, 25)",
              fontWeight: "600",
              marginBottom: 5
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "rgba(41, 50, 60, 0.15)",
    shadowRadius: 5,
    shadowOpacity: 5,
    elevation: 2,
    padding: 20
  },
  tipImage: {
    padding: 10,
    width: 110
  },
  tipText: {
    maxWidth: screenWidth * 0.5,
    textAlign: "justify"
  }
});

export default TipCard;
