import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/core";
import images from "../config/images";
import screenNames from "../config/screenNames";

function TopBar(props) {
  const navigation = useNavigation();

  if (props.isHome) {
    image = images.home;
    handleButtonPress = () => navigation.navigate(screenNames.home);
  } else {
    image = images.back;
    handleButtonPress = () => navigation.goBack();
  }

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

const styles = StyleSheet.create({
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
    fontSize: 35,
  },
  topBar: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});

TopBar.propTypes = {
  titleText: PropTypes.string,
  isHome: PropTypes.bool,
};

TopBar.defaultProps = {
  titleText: "!!!!!!",
  isHome: false,
};

export default TopBar;
