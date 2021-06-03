import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import BottomBar from "../components/BottomBar";
import SelectableInfo from "../components/SelectableInfo";
import TopBar from "../components/TopBar";
import frequentStyles from "../config/frequentStyles";
import screenNames from "../config/screenNames";

function AboutScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/images/blackboard_bg.jpg")}
      style={frequentStyles.background}
    >
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.about} />
      {/* Surrounds the list of pages */}
      <View style={frequentStyles.scrollContainer}>
        <ScrollView style={frequentStyles.scrollView}>
          <SelectableInfo text="What Is PocketScholar?" />
          <SelectableInfo text="Why Does PocketScholar Exist?" />
          <SelectableInfo text="Why Does Any Of This Matter?" />
          <SelectableInfo text="Do You Want My Money?" />
          <SelectableInfo text="How Do I Use PocketScholar?" />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Created by Scott Wilson" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default AboutScreen;
