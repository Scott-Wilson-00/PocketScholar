import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import images from "../config/images";
import SelectableInfo from "../components/SelectableInfo";
import TopBar from "../components/TopBar";
import frequentStyles from "../config/frequentStyles";
import screenNames from "../config/screenNames";

function GetStartedScreen(props) {
  return (
    <ImageBackground
      style={frequentStyles.background}
      source={images.background}
    >
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.challenges} />
      {/* Surrounds the list of pages */}
      <View style={frequentStyles.scrollContainer}>
        <ScrollView style={frequentStyles.scrollView}>
          <SelectableInfo text="Application Burnout" />
          <SelectableInfo text="Staying Focused/Diligent" />
          <SelectableInfo text="Discovering Your Passion" />
          <SelectableInfo text="Time Management" />
          <SelectableInfo text="Not Being Sick At Coding" />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Created by Scott Wilson" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default ChallengesScreen;
