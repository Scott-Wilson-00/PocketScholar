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
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    height: 35,
    width: 35,
  },
  name: {
    color: "white",
    fontFamily: "RobotoBold",
    fontSize: 25,
    marginHorizontal: 10,
  },
});

export default MenuOption;
