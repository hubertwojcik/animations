import { View, Text } from "react-native";
import React from "react";

interface PageProps {
  title: string;
  index: number;
}

export const Page = ({ title, index }: PageProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: `rgba(0,0,256,0.${index + 2})` }}>
      <Text>Page</Text>
    </View>
  );
};
