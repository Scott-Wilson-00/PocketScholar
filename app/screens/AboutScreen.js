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
      <TopBar
        titleText={screenNames.about}
        titleColor={colors.aboutPage.topBar}
        titleSize={50}
      />
      {/* Surrounds the list of pages */}
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          {/* Maps all selectables to scrolling list */}
          {selectableData.aboutSelectable.map((data, index) => {
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
      <BottomBar message="All About PocketScholar" />
    </ImageBackground>
  );
}

export default AboutScreen;
