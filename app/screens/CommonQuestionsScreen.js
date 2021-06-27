import React from "react";
import { ImageBackground, View, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import QuestionPrompt from "../components/QuestionPrompt";
import screenNames from "../config/screenNames";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";

function CommonQuestionsScreen(props) {
  let promptStyle = StyleSheetMaker.createPromptStyle(
    colors.commonQuestionsPage.prompt,
    colors.commonQuestionsPage.displayText,
    colors.commonQuestionsPage.inputContainer
  );
  let screenStyle = StyleSheetMaker.createInfoScreenStyle(
    colors.commonQuestionsPage.scrollContainer
  );

  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      <TopBar titleText={screenNames.common} titleSize={35} />
      <View style={screenStyle.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <QuestionPrompt
            title="What Apps Have You Made In this Circumstance?"
            styles={promptStyle}
          />
        </ScrollView>
      </View>
      <BottomBar message="Get Thinking" />
    </ImageBackground>
  );
}

export default CommonQuestionsScreen;
