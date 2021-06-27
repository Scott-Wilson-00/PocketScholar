import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./app/screens/AboutScreen";
import ActivityListScreen from "./app/screens/ActivityListScreen";
import ChallengesScreen from "./app/screens/ChallengesScreen";
import CommonQuestionsScreen from "./app/screens/CommonQuestionsScreen";
import GetStartedScreen from "./app/screens/GetStartedScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ScholarshipTracker from "./app/screens/ScholarshipTrackerScreen";
import screenNames from "./app/config/screenNames";
import ResourcesScreen from "./app/screens/ResourcesScreen";

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
        <Stack.Screen
          name={screenNames.common}
          component={CommonQuestionsScreen}
        />
        <Stack.Screen
          name={screenNames.resources}
          component={ResourcesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
