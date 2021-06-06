import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/core";

function AppIcon(props) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(props.screenName)}>
      <Image source={props.image} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 80,
    width: 80,
  },
});

AppIcon.propTypes = {
  changeScreen: PropTypes.func,
};

AppIcon.defaultProps = {
  changeScreen: () => {},
  image: null,
};

export default AppIcon;
