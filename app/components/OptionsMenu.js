import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import images from "../config/images";
import screenNames from "../config/screenNames";
import Modal from "react-native-modal";
import MenuOption from "./MenuOption";

function OptionsMenu(props) {
  const navigation = useNavigation();

  const handlePress = (name) => {
    navigation.navigate(name);
    props.setModalVisible(false);
  };

  return (
    <Modal
      visible={props.modalVisible}
      onRequestClose={() => props.setModalVisible(!modalVisible)}
    >
      <View style={styles.rightView}>
        <View style={styles.modalView}>
          {/* Options on the navigation menu */}
          <MenuOption
            name={screenNames.about}
            image={images.about}
            whenPressed={() => {
              handlePress(screenNames.about);
            }}
          />
          <MenuOption
            name={screenNames.getStarted}
            image={images.getStarted}
            whenPressed={() => {
              handlePress(screenNames.getStarted);
            }}
          />
          <MenuOption
            name={screenNames.challenges}
            image={images.challenges}
            whenPressed={() => {
              handlePress(screenNames.challenges);
            }}
          />
          <MenuOption
            name={screenNames.activities}
            image={images.activity}
            whenPressed={() => {
              handlePress(screenNames.activities);
            }}
          />
          <MenuOption
            name={screenNames.tracker}
            image={images.tracker}
            whenPressed={() => {
              handlePress(screenNames.tracker);
            }}
          />
          <MenuOption
            name={"Prompts"}
            image={images.common}
            whenPressed={() => {
              handlePress(screenNames.common);
            }}
          />
          <MenuOption
            name={screenNames.resources}
            image={images.resources}
            whenPressed={() => {
              handlePress(screenNames.resources);
            }}
          />
          <View style={styles.buttonRow}>
            {/* Close Menu Button */}
            <Pressable
              style={styles.button}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <View style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close Menu</Text>
              </View>
            </Pressable>
            {/* Home Button */}
            <Pressable
              style={styles.button}
              onPress={() => handlePress(screenNames.home)}
            >
              <View style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Home</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rightView: {
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    right: "-7%",
  },
  modalView: {
    alignItems: "flex-start",
    backgroundColor: "black",
    borderBottomLeftRadius: 20,
    borderColor: "white",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    height: "75%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "75%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
  },
  modalButtonText: {
    color: "black",
    fontFamily: "RobotoBold",
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
});

export default OptionsMenu;
