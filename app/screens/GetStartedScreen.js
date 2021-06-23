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

function GetStartedScreen(props) {
  let selectableStyleSheet = StyleSheetMaker.createSelectableStyle(
    colors.getStartedPage.selectable,
    colors.getStartedPage.displayText,
    colors.getStartedPage.bodyBackground
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.getStartedPage.scrollContainer
  );
  return (
    <ImageBackground style={globalStyles.background} source={images.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.getStarted} />
      {/* Surrounds the list of pages */}
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <SelectableInfo text="Standing Out" styles={selectableStyleSheet} />
          <SelectableInfo
            text="Common Activities"
            styles={selectableStyleSheet}
          />
          <SelectableInfo text="Get Involved" styles={selectableStyleSheet} />
          <SelectableInfo text="Be A Leader" styles={selectableStyleSheet} />
          <SelectableInfo
            text="Don't Spread Yourself Too Thin"
            styles={selectableStyleSheet}
          />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Be Outstanding" />
    </ImageBackground>
  );
}

export default GetStartedScreen;
