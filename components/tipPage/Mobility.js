import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Container, Content, Icon } from "native-base";

const Mobility = () => {
  return (
    <View style={styles.container}>
      <Text>Mobility</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150
  }
});

export default Mobility;
