import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import images from "../config/images";
import SelectableInfo from "../components/SelectableInfo";
import TopBar from "../components/TopBar";
import screenNames from "../config/screenNames";
import globalStyles from "../config/globalStyles";

function GetStartedScreen(props) {
  return (
    <ImageBackground style={globalStyles.background} source={images.background}>
      {/* MAIN CONTENT */}
      {/* Page Header */}
      <TopBar titleText={screenNames.getStarted} />
      {/* Surrounds the list of pages */}
      <View style={globalStyles.scrollContainer}>
        <ScrollView style={globalStyles.scrollView}>
          <SelectableInfo text="Standing Out" />
          <SelectableInfo text="Common Activities" />
          <SelectableInfo text="Get Involved" />
          <SelectableInfo text="Be A Leader" />
          <SelectableInfo text="Don't Spread Yourself Too Thin" />
        </ScrollView>
      </View>
      {/* Page Footer */}
      <BottomBar message="Created by Scott Wilson" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default GetStartedScreen;
