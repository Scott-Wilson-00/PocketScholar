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
import text from "../config/text";

function GetStartedScreen(props) {
  let selectableStyleSheet = StyleSheetMaker.createSelectableStyle(
    colors.getStartedPage.selectable,
    colors.getStartedPage.displayText,
    colors.getStartedPage.bodyBackground
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.getStartedPage.scrollContainer
  );

  const selectables = [
    {
      title: "What is a Scholarship?",
      text: text.getStartedText.whatsAScholarship,
    },
    {
      title: "Invest In Yourself First!",
      text: text.getStartedText.investInYourself,
    },
    {
      title: "The Investment Equations",
      text: text.getStartedText.investmentEquations,
    },
    {
      title: "Investment Equations 1 and 2",
      text: text.getStartedText.equations1and2,
    },
    {
      title: "Investment Equation 3",
      text: text.getStartedText.applyEquation3,
    },
    {
      title: "Breaking Down Equation 3 - The Ingredients",
      text: text.getStartedText.breakdownIngredients,
    },
    {
      title: "Breaking Down Equation 3 - The Results",
      text: text.getStartedText.breakdownResults,
    },
    { title: "Applying Equation 3", text: text.getStartedText.applyEquation3 },
    { title: "Fashion Your Passion", text: text.getStartedText.fashionPassion },
    { title: "Hide and Seek", text: text.getStartedText.hideAndSeek },
    { title: "Break Out", text: text.getStartedText.breakOut },
    { title: "The Patient", text: text.getStartedText.youThePatient },
    { title: "Recap", text: text.getStartedText.recap },
  ];

  return (
    <ImageBackground style={globalStyles.background} source={images.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.getStarted} />
      {/* Surrounds the list of pages */}
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
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
      <BottomBar message="Be Outstanding" />
    </ImageBackground>
  );
}

export default GetStartedScreen;
