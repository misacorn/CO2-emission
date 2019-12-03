import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import config from "../../config";
import thumbnail from "../../assets/hiking.png";
import fullGlobe from "../../assets/full-globe.png";
import halfGlobe from "../../assets/half-globe.png";
import smallGlobe from "../../assets/small-globe.png";

export const useTips = (impact, url) => {
  const [allTips, setAllTips] = useState([]);

  useEffect(() => {
    setAllTips([]);
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${config.AUTHORIZATION}`
      }
    })
      .then(res => res.json())
      .then(res =>
        res.smartTipsByImpactLevel.map(tip =>
          setAllTips(allTips => [...allTips, tip])
        )
      )
      .catch(error => console.log(error));
  }, [impact]);

  const filteredTips = !impact
    ? allTips
    : allTips.filter(tip => tip.impactLevel === impact);

  const showTips = () =>
    filteredTips.map(tip =>
      tip.smartTips.map(t => (
        <View key={t.externalId} style={styles.tipCards}>
          <View style={styles.thumnail}>
            <Image style={{ width: 60, height: 40 }} source={thumbnail} />
            <Image
              source={
                t.impactLevel === "Big"
                  ? fullGlobe
                  : t.impactLevel === "Medium"
                  ? halfGlobe
                  : smallGlobe
              }
              style={{
                width: 32,
                height: 32,
                marginLeft: -10,
                marginTop: -50,
                marginRight: -10
              }}
            />
          </View>

          <View style={styles.texts}>
            <Text style={styles.title}>{t.tip}</Text>
            <Text style={styles.previewText}>
              {t.tipText.replace(/\n|\r\s/g, "").substring(0, 100)}...
            </Text>
          </View>
        </View>
      ))
    );
  const styles = StyleSheet.create({
    tipCards: {
      flexDirection: "row",
      marginBottom: 20,
      borderRadius: 10,
      borderColor: "transparent",
      backgroundColor: "#ffffff",
      shadowOffset: { width: 1, height: 2 },
      shadowColor: "rgba(41, 50, 60, 0.15)",
      shadowRadius: 5,
      shadowOpacity: 5,
      elevation: 2
    },
    thumnail: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    },
    texts: { flex: 2, padding: 10 },
    title: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 5
    },
    previewText: {
      color: "#97a5bc",
      fontSize: 14
    }
  });

  return { showTips };
};
