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
import selectableData from "../config/selectableData";

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
          {selectableData.resourcesSelectable.map((data, index) => {
            return (
              <SelectableInfo
                title={data.title}
                text={data.text}
                styles={selectableStyleSheet}
                linkName={data.linkName}
                url={data.url}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Don't Stop Here!" />
    </ImageBackground>
  );
}

export default ResourcesScreen;
