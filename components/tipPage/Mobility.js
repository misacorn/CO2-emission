import React from "react";
import { useTips } from "./useTips";
import { View, Text, Image, StyleSheet } from "react-native";

import { tipsPerDomain } from "../../api/tipsPerDomain";

const Mobility = ({ impact }) => {
  const domain = "Mobility";
  const url = tipsPerDomain(domain);
  const { filteredTips } = useTips(impact, url);

  const showTips = () =>
    filteredTips.map(tip =>
      tip.smartTips.map(t => (
        <View key={t.externalId} style={styles.tipCards}>
          <View style={styles.thumnail}>
            <Text>hihe</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.title}>{t.tip}</Text>
            <Text style={styles.previewText}>
              {t.tipText.substring(0, 100)}...
            </Text>
          </View>
        </View>
      ))
    );

  return <View style={styles.container}>{showTips()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    marginBottom: 30,
    height: "100%"
  },
  tipCards: {
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 1,
    minHeight: 120,
    borderRadius: 10,
    padding: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "rgba(41, 50, 60, 0.15)"
  },
  thumnail: { flex: 1 },
  texts: { flex: 2 },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  previewText: {
    color: "#97a5bc"
  }
});

export default Mobility;
