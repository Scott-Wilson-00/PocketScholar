import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/HomeScreen";
import AboutScreen from "./app/screens/AboutScreen";
import GetStartedScreen from "./app/screens/GetStartedScreen";
import screenNames from "./app/config/screenNames";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.home}
        screenOptions={{ headerShown: false }}
      >
        {/* All Screens */}
        <Stack.Screen name={screenNames.home} component={HomeScreen} />
        <Stack.Screen name={screenNames.about} component={AboutScreen} />
        <Stack.Screen
          name={screenNames.getStarted}
          component={GetStartedScreen}
        />
        <Stack.Screen
          name={screenNames.challenges}
          component={GetStartedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
