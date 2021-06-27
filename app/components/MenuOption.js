import React from "react";
import { StyleSheet, Image, Text, Pressable } from "react-native";

function MenuOption(props) {
  return (
    <Pressable onPress={props.whenPressed} style={styles.row}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 25,
    marginHorizontal: 10,
    fontFamily: "RobotoBold",
    color: "white",
  },
});

export default MenuOption;
