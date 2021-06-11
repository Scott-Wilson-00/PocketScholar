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
//import { useStateWithCallbackLazy } from "use-state-with-callback";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import ScholarshipForm from "./ScholarshipForm";

function Scholarship(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [keyboardCanShift, setKeyboardCanShift] = useState(false);
  const [listName, setListName] = useState("New Scholarship");

  const saveListName = async () => {
    try {
      await AsyncStorage.setItem("listName", listName);
      console.log("saved name:" + listName);
    } catch (err) {
      console.log(err);
    }
  };

  const loadListName = async () => {
    try {
      const value = await AsyncStorage.getItem("listName");
      setListName(value);
      console.log("Loaded List Name: " + value);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadListName();
  }, []);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          onPress={() => {
            setKeyboardCanShift(false);
            Keyboard.dismiss();
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
                saveListName={saveListName}
                setKeyboardCanShift={setKeyboardCanShift}
                setListName={setListName}
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
