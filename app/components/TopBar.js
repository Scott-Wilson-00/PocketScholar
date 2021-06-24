import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/core";
import images from "../config/images";
import screenNames from "../config/screenNames";

function createStyle(titleSize) {
  return StyleSheet.create({
    homeButton: {
      height: 40,
      left: 10,
      width: 40,
    },
    menuButton: {
      height: 40,
      right: 10,
      width: 40,
    },
    titleText: {
      color: "white",
      fontSize: titleSize,
    },
    topBar: {
      alignItems: "flex-end",
      flexDirection: "row",
      justifyContent: "space-between",
      flex: 1,
    },
  });
}

function TopBar(props) {
  const navigation = useNavigation();

  if (props.isHome) {
    image = images.home;
    handleButtonPress = () => navigation.navigate(screenNames.home);
  } else {
    image = images.back;
    handleButtonPress = () => {
      navigation.goBack();
    };
  }

  let styles = createStyle(props.titleSize);

  return (
    <View style={styles.topBar}>
      {/* Home Button */}
      <Pressable onPress={handleButtonPress}>
        <Image source={image} style={styles.homeButton} />
      </Pressable>
      {/* Page Title */}
      <Text
        adjustsFontSizeToFit={true}
        style={styles.titleText}
        numberOfLines={1}
      >
        {props.titleText}
      </Text>
      {/* Menu Button */}
      <Pressable onPress={() => alert("Menu Pressed")}>
        <Image source={images.menu} style={styles.menuButton} />
      </Pressable>
    </View>
  );
}

TopBar.propTypes = {
  titleText: PropTypes.string,
  isHome: PropTypes.bool,
  titleSize: PropTypes.number,
};

TopBar.defaultProps = {
  titleText: "!!!!!!",
  isHome: false,
  titleSize: 35,
};

export default TopBar;
