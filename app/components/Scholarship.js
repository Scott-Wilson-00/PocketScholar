import React, { Component, createRef } from "react";
import {
  View,
  Pressable,
  Text,
  Modal,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import ScholarshipForm from "./ScholarshipForm";
import StyleSheetMaker from "../config/dynamicStyles";

class Scholarship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      keyboardCanShift: false,
      listName: "",
    };
    this.mountedRef = createRef(true);
    this.formStyle = StyleSheetMaker.createFormStyle(
      colors.scholarshipTrackerPage.formFieldBorder
    );
  }

  /**
   * Changes the state of the modalVisible 'hook'
   * @param {boolean} isModalVisible Whether the modal should be visible
   */
  setModalVisible = (isModalVisible) => {
    if (this.mountedRef.current) {
      this.setState({ modalVisible: isModalVisible });
    }
  };
  /**
   * Changes the state of the keyboardCandShift 'hook'
   * @param {boolean} canShift Whether the keyboard can shift
   */
  setKeyboardCanShift = (canShift) => {
    if (this.mountedRef.current) {
      this.setState({ keyboardCanShift: canShift });
    }
  };
  /**
   * Changes the state of the listName 'hook'
   * @param {String} newName The new name to be set
   */
  setListName = (newName) => {
    if (this.mountedRef.current) {
      this.setState({ listName: newName });
    }
  };

  /**
   * Saves scholarship display name in local storage
   * @param {String} nameToStore The name to store
   * @param {Number} id The unique id of the scholarship
   */
  saveListDisplayName = async (nameToStore, id) => {
    try {
      await AsyncStorage.setItem("listName" + id, nameToStore);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Neatly sets and saves the new name of a scholarship
   * @param {String} newName The name to be set and saved
   */
  updateListDisplayName = (newName) => {
    this.setListName(newName);
    this.saveListDisplayName(newName, this.props.id);
  };

  /**
   * Loads the scholarship display name from local storage
   */
  loadListName = async () => {
    try {
      if (this.mountedRef.current) {
        const loadedName = await AsyncStorage.getItem(
          "listName" + this.props.id
        );
        // If the retrieved name is not found or empty, default to 'New Scholarship'
        if (loadedName != null) {
          this.setListName(
            loadedName.length > 0 ? loadedName : "New Scholarship"
          );
        } else {
          this.setListName("New Scholarship");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Clears stored entries from deleted scholarships
   */
  clearData = async () => {
    try {
      await AsyncStorage.multiRemove([
        "listName" + this.props.id,
        "name" + this.props.id,
        "deadline" + this.props.id,
        "value" + this.props.id,
        "criteria" + this.props.id,
        "essayTopic" + this.props.id,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  // Runs on component mount
  componentDidMount() {
    this.mountedRef.current = true;
    this.loadListName();
  }

  // Runs before component unmount
  componentWillUnmount() {
    this.mountedRef.current = false;
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
                style={this.props.styles.modalContentContainer}
              >
                {/* Edit Scholarship title*/}
                <Text style={this.props.styles.editTitle}>
                  Edit Scholarship
                </Text>
                {/* Editable fields and button to submit and close*/}
                <ScholarshipForm
                  closeModal={() => this.setModalVisible(false)}
                  id={this.props.id}
                  setKeyboardCanShift={this.setKeyboardCanShift}
                  styles={this.formStyle}
                  updateListDisplayName={this.updateListDisplayName}
                />
              </KeyboardAvoidingView>
            </ImageBackground>
          </Pressable>
        </Modal>

        {/* Contents of the scholarship component (excluding modal)*/}
        {/* The entire scholarship can be clicked to open the modal */}
        <Pressable
          style={this.props.styles.selectable}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          {/* The display name of the scholarship */}
          <Text numberOfLines={1} style={this.props.styles.name}>
            {this.state.listName}
          </Text>
          {/* Button to delete the scholarship */}
          <Text
            style={this.props.styles.removeButton}
            onPress={() => {
              this.clearData();
              this.props.removeScholarship(this.props.id, this.props.index);
            }}
          >
            -
          </Text>
        </Pressable>
      </View>
    );
  }
}

export default Scholarship;
