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
            <Pressable
              style={styles.button}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <View style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close Menu</Text>
              </View>
            </Pressable>
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
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    right: "-7%",
  },
  modalView: {
    backgroundColor: "black",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: "75%",
    width: "75%",
    alignItems: "flex-start",
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
    textAlign: "center",
    fontFamily: "RobotoBold",
  },
  modalButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
  },
});

export default OptionsMenu;
