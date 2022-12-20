import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ColorPicker() {
  return (
    <View style={styles.container}>
      <Text>Introduction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
