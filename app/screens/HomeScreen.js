import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppIcon from "../components/AppIcon";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";

function HomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/images/blackboard-bg.jpg")}
      style={styles.backgroundImage}
    >
      {/* Main Content */}
      <TopBar titleText="PocketScholar" isHome={true}></TopBar>
      <View>
        <View style={styles.appRow}>
          <AppIcon image={require("../assets/images/about.png")} />
          <AppIcon image={require("../assets/images/startup.png")} />
          <AppIcon image={require("../assets/images/challenges.png")} />
        </View>
        <View style={styles.appRow}>
          <AppIcon image={require("../assets/images/tracker.png")} />
          <AppIcon image={require("../assets/images/activity.png")} />
          <AppIcon image={require("../assets/images/common.png")} />
        </View>
        <View style={styles.appRow}>
          <AppIcon image={require("../assets/images/resources.png")} />
        </View>
      </View>
      <View style={styles.bottomBarContainer}>
        <BottomBar message={"Created By Scott W."} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  bottomBarContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  safeArea: {
    backgroundColor: "#5e5e5e",
    flex: 1,
  },
});

export default HomeScreen;
