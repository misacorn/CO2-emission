import React from "react";
import { useTips } from "./useTips";
import { View, Text, Image, StyleSheet } from "react-native";

import { tipsPerDomain } from "../../api/tipsPerDomain";

const Goods = ({ impact }) => {
  const domain = "Goods";
  const url = tipsPerDomain(domain);
  const { filteredTips } = useTips(impact, url);

  const showTips = () =>
    filteredTips.map(tip =>
      tip.smartTips.map(t => (
        <View key={t.externalId}>
          <Text>{t.tip}</Text>
        </View>
      ))
    );

  return <View style={styles.container}>{showTips()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150
  }
});

export default Goods;
