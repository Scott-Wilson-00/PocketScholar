import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screenNames from "./app/config/screenNames";
import HomeScreen from "./app/screens/HomeScreen";
import AboutScreen from "./app/screens/AboutScreen";
import GetStartedScreen from "./app/screens/GetStartedScreen";
import ChallengesScreen from "./app/screens/ChallengesScreen";
import ScholarshipTracker from "./app/screens/ScholarshipTrackerScreen";
import ActivityListScreen from "./app/screens/ActivityListScreen";

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
          component={ChallengesScreen}
        />
        <Stack.Screen
          name={screenNames.tracker}
          component={ScholarshipTracker}
        />
        <Stack.Screen
          name={screenNames.activities}
          component={ActivityListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
