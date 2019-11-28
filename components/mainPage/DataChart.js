import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { VictoryPie, VictoryLabel } from "victory-native";

const DataChart = () => {
  return (
    <View style={styles.container}>
      <VictoryPie
        data={[
          { x: "Cats", y: 70 },
          { x: "Dogs", y: 25 },
          { x: "Dogs", y: 60 },
          { x: "Dogs", y: 10 },
          { x: "Dogs", y: 40 },
          { x: "Birds", y: 55 }
        ]}
        height={350}
        innerRadius={100}
        labelComponent={<VictoryLabel />}
        labelRadius={({ innerRadius }) => innerRadius + 5}
        padAngle={3}
        startAngle={90}
        endAngle={450}
        colorScale={["white", "white", "white", "white", "white", "white"]}
        labels={({ datum }) => `y: ${datum.y}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: 25
  }
});

export default DataChart;
