import React, { useState, useEffect } from "react";
import { useTips } from "./useTips";
import { View, Text, Image, StyleSheet } from "react-native";

import { tipsPerDomain } from "../../api/tipsPerDomain";

const Housing = ({ impact }) => {
  const domain = "Housing";
  const url = tipsPerDomain(domain);
  const { showTips } = useTips(impact, url);
  // const [allTips, setAllTips] = useState([]);

  // useEffect(() => {
  //   setAllTips([]);
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `${config.AUTHORIZATION}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res =>
  //       res.smartTipsByImpactLevel.map(tip =>
  //         setAllTips(allTips => [...allTips, tip])
  //       )
  //     )
  //     .catch(error => console.log(error));
  // }, [impact]);

  // const tips = !impact
  //   ? allTips
  //   : allTips.filter(tip => tip.impactLevel === impact);

  // const showTips = () =>
  //   tips.map(tip =>
  //     tip.smartTips.map(t => (
  //       <View key={t.externalId}>
  //         <Text>{t.tip}</Text>
  //       </View>
  //     ))
  //   );

  return <View style={styles.container}>{showTips()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150
  }
});

export default Housing;
