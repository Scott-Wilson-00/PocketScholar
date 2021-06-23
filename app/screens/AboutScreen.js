import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import SelectableInfo from "../components/SelectableInfo";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";

function AboutScreen(props) {
  let selectableStyleSheet = StyleSheetMaker.createSelectableStyle(
    colors.aboutPage.selectable,
    colors.aboutPage.displayText,
    colors.aboutPage.bodyBackground
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.aboutPage.scrollContainer
  );

  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.about} />
      {/* Surrounds the list of pages */}
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <SelectableInfo
            text="What Is PocketScholar?"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            text="Why Does PocketScholar Exist?"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            text="Why Does Any Of This Matter?"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            text="Do You Want My Money?"
            styles={selectableStyleSheet}
          />
          <SelectableInfo
            text="How Do I Use PocketScholar?"
            styles={selectableStyleSheet}
          />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="All About PocketScholar" />
    </ImageBackground>
  );
}

export default AboutScreen;
