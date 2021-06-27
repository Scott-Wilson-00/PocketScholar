import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/core";
import images from "../config/images";
import screenNames from "../config/screenNames";
import OptionsMenu from "./OptionsMenu";

function createStyle(titleSize, titleColor) {
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
      color: titleColor,
      fontSize: titleSize,
      fontFamily: "ChalkboyRegular",
      maxWidth: "60%",
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
  const [modalVisible, setModalVisible] = useState(false);
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

  let styles = createStyle(props.titleSize, props.titleColor);

  return (
    <View style={styles.topBar}>
      <OptionsMenu
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* TopBar Contents */}
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
        <Pressable onPress={() => setModalVisible(true)}>
          <Image source={images.menu} style={styles.menuButton} />
        </Pressable>
      </View>
    </View>
  );
}

TopBar.propTypes = {
  titleText: PropTypes.string,
  isHome: PropTypes.bool,
  titleSize: PropTypes.number,
  titleColor: PropTypes.string,
};

TopBar.defaultProps = {
  titleText: "!!!!!!",
  isHome: false,
  titleSize: 45,
  titleColor: "white",
};

export default TopBar;
