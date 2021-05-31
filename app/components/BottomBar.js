import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

function BottomBar(props) {
  return (
    <View style={styles.bottomBar}>
      <Text style={styles.bottomBarText}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "80%",
    height: 50,
    borderRadius: 80,
  },
  bottomBarText: {
    fontSize: 25,
    color: "white",
  },
});

BottomBar.PropTypes = {
  message: PropTypes.string,
};

BottomBar.defaultProps = {
  message: "!!!!!!",
};

export default BottomBar;
