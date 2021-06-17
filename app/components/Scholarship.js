import React, { Component, useEffect, useState } from "react";
import {
  View,
  Pressable,
  Text,
  Modal,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import ScholarshipForm from "./ScholarshipForm";

class Scholarship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      keyboardCanShift: false,
      listName: "",
    };
  }

  setModalVisible = (isModalVisible) => {
    this.setState({ modalVisible: isModalVisible });
  };
  setKeyboardCanShift = (canShift) => {
    this.setState({ keyboardCanShift: canShift });
  };
  setListName = (newName) => {
    this.setState({ listName: newName });
  };

  saveListDisplayName = async (nameToStore, id) => {
    /** Saves the display name to local storage  */
    try {
      await AsyncStorage.setItem("listName" + id, nameToStore);
    } catch (error) {
      console.log(error);
    }
  };

  runTest = () => console.log("function ran on scholarship " + this.props.id);

  loadListName = async () => {
    /** Loads the display name from local storage */
    try {
      const loadedName = await AsyncStorage.getItem("listName" + this.props.id);
      if (loadedName !== null) {
        this.setListName(
          loadedName.length > 0 ? loadedName : "New Scholarship"
        );
      } else {
        // this.setListName("New Scholarship");
      }
      console.log("name loaded: " + loadedName);
    } catch (err) {
      console.log(err);
    }
  };

  updateListDisplayName = (newName) => {
    /** Changes the display name when scholarship form is submitted */
    this.setListName(newName);
    this.saveListDisplayName(newName, this.props.id);
  };

  componentDidMount() {
    /** Retrieves display name on screen load */
    this.loadListName(this.props.id);
  }

  render() {
    return (
      <View>
        {/* Modal Containing the scholarship form */}
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
        >
          {/* Closes keyboard when clicking anywhere on screen */}
          <Pressable
            onPress={() => {
              Keyboard.dismiss();
              this.setKeyboardCanShift(false);
            }}
            style={{ flex: 1 }}
          >
            <ImageBackground
              source={images.background}
              style={globalStyles.background}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={this.state.keyboardCanShift}
                style={styles.modalContentContainer}
              >
                {/* Edit Scholarship title*/}
                <Text style={styles.editTitle}>Edit Scholarship</Text>
                {/* Editable fields and button to submit and close*/}
                <ScholarshipForm
                  closeModal={() => this.setModalVisible(false)}
                  id={this.props.id}
                  setKeyboardCanShift={this.setKeyboardCanShift}
                  updateListDisplayName={this.updateListDisplayName}
                />
              </KeyboardAvoidingView>
            </ImageBackground>
          </Pressable>
        </Modal>

        {/* A scholarship that can be pressed to open a formik form with all the info*/}
        <Pressable
          style={styles.selectable}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text numberOfLines={1} style={styles.name}>
            {this.state.listName}
          </Text>
          <Text
            style={styles.removeButton}
            onPress={() =>
              this.props.removeScholarship(this.props.id, this.props.index)
            }
          >
            -
          </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContentContainer: {
    alignItems: "center",
    flex: 20,
    justifyContent: "flex-end",
  },
  editTitle: {
    color: "white",
    fontSize: 30,
    flex: 1,
    paddingVertical: "12%",
    textAlign: "center",
  },
  name: {
    color: "white",
    fontSize: 22,
    paddingHorizontal: "5%",
    flex: 10,
  },
  removeButton: {
    color: "white",
    fontSize: 40,
    marginHorizontal: "5%",
    flex: 1,
  },
  selectable: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 25,
    flexDirection: "row",
    height: 75,
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 15,
    width: "90%",
  },
});

export default Scholarship;
