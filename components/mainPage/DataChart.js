import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "native-base";
import { VictoryPie, VictoryLabel } from "victory-native";

const DataChart = ({ amountPerDomain }) => {
  const newData = amountPerDomain.map(a => ({
    x: a.domain,
    y: a.co2Amount
  }));

  return (
    <View style={styles.container}>
      <VictoryPie
        data={newData}
        height={350}
        innerRadius={100}
        labelComponent={<VictoryLabel />}
        labelRadius={({ innerRadius }) => innerRadius + 5}
        padAngle={3}
        startAngle={90}
        endAngle={450}
        colorScale={["white", "white", "white", "white", "white", "white"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default DataChart;
