import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";
import SelectableInfo from "../components/SelectableInfo";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";

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
          <SelectableInfo title="Standing Out" styles={selectableStyleSheet} />
          <SelectableInfo
            title="Common Activities"
            styles={selectableStyleSheet}
          />
          <SelectableInfo title="Get Involved" styles={selectableStyleSheet} />
          <SelectableInfo title="Be A Leader" styles={selectableStyleSheet} />
          <SelectableInfo
            title="Don't Spread Yourself Too Thin"
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
