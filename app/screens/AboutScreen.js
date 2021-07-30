import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";
import SelectableInfo from "../components/SelectableInfo";
import StyleSheetMaker from "../config/dynamicStyles";
import text from "../config/text";
import TopBar from "../components/TopBar";

function AboutScreen(props) {
  let selectableStyleSheet = StyleSheetMaker.createSelectableStyle(
    colors.aboutPage.selectable,
    colors.aboutPage.displayText,
    colors.aboutPage.bodyBackground
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.aboutPage.scrollContainer
  );

  const selectables = [
    { title: "What Is PocketScholar?", text: text.aboutText.whatIsPs },
    {
      title: "Why Does PocketScholar Exist?",
      text: text.aboutText.whyDoesPsExist,
    },
    {
      title: "Why Does PocketScholar Exist? Pt. 2",
      text: text.aboutText.whyDoesPsExist2,
    },
    { title: "What are Info Pages?", text: text.aboutText.psInfoPages },
    { title: "About Page", text: text.aboutText.aboutPage },
    { title: "Get Started Page", text: text.aboutText.getStartedPage },
    { title: "Challenges Page", text: text.aboutText.challengesPage },
    {
      title: "What are Interactable Pages?",
      text: text.aboutText.psInteractable,
    },
    { title: "Activity List", text: text.aboutText.activityList },
    { title: "Scholarship Tracker", text: text.aboutText.tracker },
    { title: "Prompts Page", text: text.aboutText.promptsPage },
    { title: "Resources Page", text: text.aboutText.resourcesPage },
    { title: "Developer's Notes", text: text.aboutText.notes },
  ];

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
          {selectables.map((data, index) => {
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
