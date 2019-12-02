import React from "react";
import { useTips } from "./useTips";
import { View, StyleSheet } from "react-native";

import { tipsPerDomain } from "../../api/tipsPerDomain";

const Mobility = ({ impact }) => {
  const domain = "Mobility";
  const url = tipsPerDomain(domain);
  const { showTips } = useTips(impact, url);

  return <View style={styles.container}>{showTips()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    marginBottom: 30,
    height: "100%",
    padding: 10,
    alignItems: "center"
  }
});

export default Mobility;
