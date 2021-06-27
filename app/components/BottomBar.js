import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

function BottomBar(props) {
  return (
    <View style={styles.bottomBarContainer}>
      <View style={styles.bottomBar}>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={styles.message}
        >
          {props.message}
        </Text>
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
    borderRadius: 80,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
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
    fontFamily: "RobotoBold",
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
