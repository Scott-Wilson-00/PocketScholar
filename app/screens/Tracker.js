import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import Scholarship from "../components/Scholarship";
import TopBar from "../components/TopBar";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";

function Tracker(props) {
  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      <View style={styles.topOfScreen}>
        <TopBar titleText={screenNames.tracker} />
        <View style={styles.listContainer}>
          <ScrollView style={styles.scrollingList}>
            <Scholarship id={1} />
            <Scholarship id={2} />
          </ScrollView>
        </View>
      </View>

      <View style={styles.bottomOfScreen}></View>

      {/* Pressing button adds new scholarship, increases id value, deleting scholarship clears asyncstorage data */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  topOfScreen: {
    justifyContent: "center",
    height: "12%",
    backgroundColor: "green",
    flex: 7,
  },
  bottomOfScreen: {
    backgroundColor: "white",
    flex: 1,
  },
  listContainer: {
    backgroundColor: "yellow",
    borderRadius: 40,
    marginHorizontal: "5%",
    marginTop: 15,
    flex: 6,
    paddingVertical: 10,
  },
  scrollingList: {
    width: "100%",
  },
});

export default Tracker;
