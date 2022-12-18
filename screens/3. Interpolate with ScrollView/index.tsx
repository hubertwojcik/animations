import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Page } from "./components/page";

const WORDS = ["What's", "up", "mobile", "devs"];

export default function InterpolateWithScrollView() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      style={styles.container}
      horizontal
      pagingEnabled
    >
      {WORDS.map((title, index) => (
        <Page title={title} index={index} key={index} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
