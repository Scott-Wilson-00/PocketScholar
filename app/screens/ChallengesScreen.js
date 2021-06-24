import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import images from "../config/images";
import SelectableInfo from "../components/SelectableInfo";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";
import screenNames from "../config/screenNames";
import globalStyles from "../config/globalStyles";

function ChallengesScreen(props) {
  let selectableStyleSheet = StyleSheetMaker.createSelectableStyle(
    colors.challengesPage.selectable,
    colors.challengesPage.displayText,
    colors.challengesPage.bodyBackground
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.challengesPage.scrollContainer
  );
  return (
    <ImageBackground style={globalStyles.background} source={images.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.challenges} />
      {/* Surrounds the list of pages */}
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <SelectableInfo
            title="Application Burnout"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            title="Staying Focused/Diligent"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            title="Discovering Your Passion"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            title="Time Management"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            title="Not Being Sick At Coding"
            styles={selectableStyleSheet}
          />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Work Smarter" />
    </ImageBackground>
  );
}

export default ChallengesScreen;
