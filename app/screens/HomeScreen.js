import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppIcon from "../components/AppIcon";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFonts = () =>
  Font.loadAsync({
    ChalkboyRegular: require("../assets/fonts/ChalkboyRegular.otf"),
    FjallaOneRegular: require("../assets/fonts/FjallaOne-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  });

function HomeScreen(props) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <ImageBackground
        source={images.background}
        style={globalStyles.background}
      >
        {/* MAIN CONTENT */}
        {/* Page Header */}
        <TopBar titleText={screenNames.home} isHome={true} />
        {/* "Apps" */}
        <View style={styles.appContainer}>
          {/* Row 1 */}
          <View style={styles.appRow}>
            <AppIcon image={images.about} screenName={screenNames.about} />
            <AppIcon
              image={images.getStarted}
              screenName={screenNames.getStarted}
            />
            <AppIcon
              image={images.challenges}
              screenName={screenNames.challenges}
            />
          </View>
          {/* Row 2 */}
          <View style={styles.appRow}>
            <AppIcon
              image={images.activity}
              screenName={screenNames.activities}
            />
            <AppIcon image={images.tracker} screenName={screenNames.tracker} />
            <AppIcon image={images.common} screenName={screenNames.common} />
          </View>
          {/* Row 3 */}
          <View style={styles.appRow}>
            <AppIcon
              image={images.resources}
              screenName={screenNames.resources}
            />
          </View>
        </View>
        {/* Page Footer */}
        <BottomBar message={"Created By Scott Wilson"} />
      </ImageBackground>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  appRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 40,
    flex: 1,
  },
  appContainer: {
    flex: 6,
  },
});

export default HomeScreen;
