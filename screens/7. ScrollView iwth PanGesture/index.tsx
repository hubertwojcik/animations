import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Page } from "./components/page";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const titles = ["What's", "up", "mobile", "devs"];

export default function ScrollViewPanGesture() {
  return (
    <View style={styles.container}>
      <PanGestureHandler>
        <Animated.View>
          {titles.map((title, index) => (
            <Page key={title} title={title} index={index} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
