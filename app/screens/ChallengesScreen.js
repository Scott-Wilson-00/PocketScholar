import React from "react";
import { ImageBackground, View, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";
import SelectableInfo from "../components/SelectableInfo";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";
import selectableData from "../config/selectableData";

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
          {selectableData.challengesSelectable.map((data, index) => {
            return (
              <SelectableInfo
                title={data.title}
                text={data.text}
                styles={selectableStyleSheet}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Work Smarter" />
    </ImageBackground>
  );
}

export default ChallengesScreen;
