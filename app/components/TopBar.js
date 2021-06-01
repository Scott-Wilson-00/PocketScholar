import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

function TopBar(props) {
  if (props.isHome) {
    image = require("../assets/images/home.png");
  } else {
    image = require("../assets/images/back_button.png");
  }

  return (
    <View style={styles.topBar}>
      {/* Home Button */}
      <Pressable onPress={() => alert("Home Pressed")}>
        <Image source={image} style={styles.homeButton} />
      </Pressable>
      {/* Page Title */}
      <Text style={styles.titleText}>{props.titleText}</Text>
      {/* Menu Button */}
      <Pressable onPress={() => alert("Menu Pressed")}>
        <Image
          source={require("../assets/images/menu_button.png")}
          style={styles.menuButton}
        />
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
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
