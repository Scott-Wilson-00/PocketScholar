import React from "react";
import { ImageBackground, StyleSheet, TextInput } from "react-native";
import Scholarship from "../components/Scholarship";
import TopBar from "../components/TopBar";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";

function Tracker(props) {
  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      <Scholarship field="May 6, 2021" header="Deadline"></Scholarship>

      {/* MAIN CONTENT */}
      {/* Page Header */}
      {/* <TopBar titleText={screenNames.tracker} /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default Tracker;
