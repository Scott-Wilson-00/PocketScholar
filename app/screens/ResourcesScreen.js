import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";
import SelectableInfo from "../components/SelectableInfo";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";

function ResourcesScreen(props) {
  let selectableStyleSheet = StyleSheetMaker.createSelectableStyle(
    colors.resourcesPage.selectable,
    colors.resourcesPage.displayText,
    colors.resourcesPage.bodyBackground
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.resourcesPage.scrollContainer
  );

  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.resources} />
      {/* Surrounds the list of pages */}
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <SelectableInfo
            title="ScholarTree"
            styles={selectableStyleSheet}
            linkName="ScholarTree"
            url="https://scholartree.ca/"
          />
          <SelectableInfo
            title="ScholarshipsCanada"
            styles={selectableStyleSheet}
          />
          <SelectableInfo title="MyCampusGPS" styles={selectableStyleSheet} />
          <SelectableInfo title="Google" styles={selectableStyleSheet} />
          <SelectableInfo title="Youtube" styles={selectableStyleSheet} />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Placeholder" />
    </ImageBackground>
  );
}

export default ResourcesScreen;
