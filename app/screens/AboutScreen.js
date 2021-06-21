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
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";

function AboutScreen(props) {
  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.about} />
      {/* Surrounds the list of pages */}
      <View style={globalStyles.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <SelectableInfo
            text="What Is PocketScholar?"
            color="rgba(255,0,0,0.6)"
          />
          <SelectableInfo
            text="Why Does PocketScholar Exist?"
            color="rgba(255,0,0,0.6)"
          />
          <SelectableInfo
            text="Why Does Any Of This Matter?"
            color="rgba(255,0,0,0.6)"
          />
          <SelectableInfo
            text="Do You Want My Money?"
            color="rgba(255,0,0,0.6)"
          />
          <SelectableInfo
            text="How Do I Use PocketScholar?"
            color="rgba(255,0,0,0.6)"
          />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Created by Scott Wilson" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default AboutScreen;
