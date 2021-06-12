import React, { useEffect, useState } from "react";
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

function Scholarship(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [keyboardCanShift, setKeyboardCanShift] = useState(false);
  const [listName, setListDisplayName] = useState();

  const saveListDisplayName = async (nameToStore) => {
    /** Saves the display name to local storage  */
    try {
      await AsyncStorage.setItem("listName" + props.id, nameToStore);
    } catch (error) {
      console.log(error);
    }
  };

  const loadListName = async () => {
    /** Loads the display name from local storage */
    try {
      const loadedName = await AsyncStorage.getItem("listName" + props.id);
      if (loadedName !== null) {
        setListDisplayName(
          loadedName.length > 0 ? loadedName : "New Scholarship"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateListDisplayName = (newName) => {
    /** Changes the display name when scholarship form is submitted */
    setListDisplayName(newName);
    saveListDisplayName(newName);
  };

  useEffect(() => {
    /** Retrieves display name on screen load */
    loadListName();
  }, []);

  return (
    <View>
      {/* Modal Containing the scholarship form */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        {/* Closes keyboard when clicking anywhere on screen */}
        <Pressable
          onPress={() => {
            Keyboard.dismiss();
            setKeyboardCanShift(false);
          }}
          style={{ flex: 1 }}
        >
          <ImageBackground
            source={images.background}
            style={globalStyles.background}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              enabled={keyboardCanShift}
              style={styles.modalContentContainer}
            >
              {/* Edit Scholarship title*/}
              <Text style={styles.editTitle}>Edit Scholarship</Text>
              {/* Editable fields and button to submit and close*/}
              <ScholarshipForm
                closeModal={() => setModalVisible(false)}
                id={props.id}
                setKeyboardCanShift={setKeyboardCanShift}
                updateListDisplayName={updateListDisplayName}
              />
            </KeyboardAvoidingView>
          </ImageBackground>
        </Pressable>
      </Modal>

      {/* A scholarship that can be pressed to open a formik form with all the info*/}
      <Pressable
        style={styles.selectable}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text numberOfLines={1} style={styles.name}>
          {listName}
        </Text>
      </Pressable>
    </View>
  );
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
  },
  selectable: {
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 25,
    height: 75,
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 15,
    width: "90%",
  },
});

export default Scholarship;
