import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Container, Tabs, Tab, TabHeading, Icon } from "native-base";

import fullGlobe from "../../assets/icons/full-globe.png";
import halfGlobe from "../../assets/icons/half-globe.png";
import smallGlobe from "../../assets/icons/small-globe.png";

import TipTab from "../../navigation/TipTab";

const IMPACT_LEVELS = {
  OFF: "",
  SMALL: "Small",
  MEDIUM: "Medium",
  BIG: "Big"
};

const ImpactLevels = () => {
  const [impact, setImpact] = useState(IMPACT_LEVELS.OFF);

  return (
    <View style={styles.container}>
      <View style={styles.challenges}>
        <Text style={{ color: "#97A5BC", fontSize: 14, fontWeight: "bold" }}>
          Challenges
        </Text>
        <TouchableOpacity style={styles.globes}>
          <TouchableOpacity onPress={() => setImpact(IMPACT_LEVELS.BIG)}>
            <View style={{ marginRight: 7 }}>
              <View style={impact === IMPACT_LEVELS.BIG && styles.underline}>
                <Image style={styles.images} source={fullGlobe} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImpact(IMPACT_LEVELS.MEDIUM)}>
            <View style={{ marginLeft: 7, marginRight: 7 }}>
              <View style={impact === IMPACT_LEVELS.MEDIUM && styles.underline}>
                <Image style={styles.images} source={halfGlobe} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImpact(IMPACT_LEVELS.SMALL)}>
            <View style={{ marginLeft: 7, marginRight: 7 }}>
              <View style={impact === IMPACT_LEVELS.SMALL && styles.underline}>
                <Image style={styles.images} source={smallGlobe} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImpact(IMPACT_LEVELS.OFF)}>
            <Icon style={{ marginLeft: 7 }} type="FontAwesome" name="remove" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <TipTab impact={impact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 110
  },
  challenges: {
    marginLeft: 40,
    marginRight: 40
  },
  globes: {
    flex: 1,
    flexDirection: "row",
    maxWidth: 170,
    marginTop: 20
  },
  images: {
    width: 32,
    height: 32,
    marginBottom: 5
  },
  underline: {
    borderBottomWidth: 2,
    borderColor: "#191919"
  }
});

export default ImpactLevels;
