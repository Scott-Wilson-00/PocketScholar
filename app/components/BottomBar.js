import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

function BottomBar(props) {
  return (
    <View style={styles.bottomBarContainer}>
      <View style={styles.bottomBar}>
        <Text style={styles.message}>{props.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    borderRadius: 80,
    height: 50,
    width: "80%",
  },
  bottomBarContainer: {
    alignItems: "center",
    flex: 0.5,
    justifyContent: "flex-end",
    marginBottom: 20,
    marginTop: 5,
  },
  message: {
    color: "white",
    fontSize: 25,
  },
});

BottomBar.propTypes = {
  message: PropTypes.string,
};

BottomBar.defaultProps = {
  message: "!!!!!!",
};

export default BottomBar;
