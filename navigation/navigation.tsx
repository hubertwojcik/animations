import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import IntroductionScreen from "../screens/1. Introduction";
import BasicGestureHandler from "../screens/2. Basic Gesture Handler";
import InterpolateWithScrollView from "../screens/3. Interpolate with ScrollView";
import InterpolateColors from "../screens/4. Interpolate colors ";
import PinchGestureHandler from "../screens/5. PinchGestureHandler";
import DoubleTap from "../screens/6. Double tap";
import ScrollViewPanGesture from "../screens/7. ScrollView iwth PanGesture";

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("1. Introduction")}
        title="Go to Introduction to reanimtaed"
      />
      <Button
        onPress={() => navigation.navigate("2. GestureHandler")}
        title="Basic of gesture handler"
      />
      <Button
        onPress={() => navigation.navigate("3. Interpolate ScrollView")}
        title="Interpolate with scrollview"
      />
      <Button
        onPress={() => navigation.navigate("4. Interpolate Colors")}
        title="Interpolate Colors"
      />
      <Button
        onPress={() => navigation.navigate("5. Pinch Gesture")}
        title="Pinch Gesture"
      />
      <Button
        onPress={() => navigation.navigate("6. Double Tap")}
        title="Double Tap"
      />
      <Button
        onPress={() => navigation.navigate("7. Scrollview Pan Gesutre")}
        title="Scrollview Pan gesture"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="1. Introduction" component={IntroductionScreen} />
        <Drawer.Screen
          name="2. GestureHandler"
          component={BasicGestureHandler}
        />
        <Drawer.Screen
          name="3. Interpolate ScrollView"
          component={InterpolateWithScrollView}
        />
        <Drawer.Screen
          name="4. Interpolate Colors"
          component={InterpolateColors}
        />
        <Drawer.Screen
          name="5. Pinch Gesture"
          component={PinchGestureHandler}
        />
        <Drawer.Screen name="6. Double Tap" component={DoubleTap} />
        <Drawer.Screen
          name="7. Scrollview Pan Gesutre"
          component={ScrollViewPanGesture}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
