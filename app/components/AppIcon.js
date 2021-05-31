import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import images from "../config/images";

function AppIcon(props) {
  return (
    <Pressable onPress={() => alert("Icon Pressed")}>
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

export default AppIcon;
