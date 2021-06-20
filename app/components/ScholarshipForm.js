import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import globalStyles from "../config/globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ScholarshipForm(props) {
  // The states to be modified by the loadEntries asyncstorage function
  // Used to initialize the Formik form when loaded
  const [initName, setInitName] = useState("");
  const [initDeadline, setInitDeadline] = useState("");
  const [initValue, setInitValue] = useState("");
  const [initCriteria, setInitCriteria] = useState("");
  const [initEssayTopic, setInitTopic] = useState("");

  /**
   * Stores Formik form entries in device's local storage
   * @param {Object} entries Key value pairs of each form field
   */
  const saveEntries = async (entries) => {
    try {
      await AsyncStorage.multiSet([
        ["name" + props.id, entries.name],
        ["deadline" + props.id, entries.deadline],
        ["value" + props.id, entries.value],
        ["criteria" + props.id, entries.criteria],
        ["essayTopic" + props.id, entries.essayTopic],
      ]);
      // Defaults display name to 'New Scholarship' when field left empty
      props.updateListDisplayName(
        entries.name !== null && entries.name.length > 0
          ? entries.name
          : "New Scholarship"
      );
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Retrieves entered data from device's local storage
   * and sets the initial form values
   */
  const loadEntries = async () => {
    try {
      const retrievedData = await AsyncStorage.multiGet([
        "name" + props.id,
        "deadline" + props.id,
        "value" + props.id,
        "criteria" + props.id,
        "essayTopic" + props.id,
      ]);
      setInitName(retrievedData[0][1] !== null ? retrievedData[0][1] : "");
      setInitDeadline(retrievedData[1][1] !== null ? retrievedData[1][1] : "");
      setInitValue(retrievedData[2][1] !== null ? retrievedData[2][1] : "");
      setInitCriteria(retrievedData[3][1] !== null ? retrievedData[3][1] : "");
      setInitTopic(retrievedData[4][1] !== null ? retrievedData[4][1] : "");
    } catch (err) {
      console.log(err);
    }
  };

  // Runs on component mount
  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <View style={styles.formContainer}>
      <Formik
        enableReinitialize
        initialValues={{
          name: initName,
          deadline: initDeadline,
          value: initValue,
          criteria: initCriteria,
          essayTopic: initEssayTopic,
        }}
        // Functions to call when modal closes
        // values Array<string> of formik textinput values
        onSubmit={(values) => {
          saveEntries(values);
          Keyboard.dismiss();
          props.setKeyboardCanShift(false);
          props.closeModal();
        }}
      >
        {/* Premade props from formik */}
        {(formikProps) => (
          <View style={{ alignItems: "center" }}>
            {/* Form Inputs  */}
            <TextInput
              maxLength={40}
              onChangeText={formikProps.handleChange("name")}
              onFocus={() => props.setKeyboardCanShift(false)}
              placeholder="Scholarship Name"
              style={globalStyles.input}
              value={formikProps.values.name}
            />
            <TextInput
              maxLength={20}
              onChangeText={formikProps.handleChange("deadline")}
              onFocus={() => props.setKeyboardCanShift(false)}
              placeholder="Deadline"
              style={globalStyles.input}
              value={formikProps.values.deadline}
            />
            <TextInput
              maxLength={15}
              onChangeText={formikProps.handleChange("value")}
              onFocus={() => props.setKeyboardCanShift(false)}
              placeholder="Value"
              style={globalStyles.input}
              value={formikProps.values.value}
            />
            <TextInput
              maxLength={40}
              textAlignVertical="center"
              onChangeText={formikProps.handleChange("criteria")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Criteria"
              style={globalStyles.input}
              value={formikProps.values.criteria}
            />
            <TextInput
              maxLength={30}
              onChangeText={formikProps.handleChange("essayTopic")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Essay Topic"
              style={globalStyles.input}
              value={formikProps.values.essayTopic}
            />
            {/* Close and Update Form Button */}
            <Pressable onPress={formikProps.handleSubmit}>
              <View style={styles.updateButton}>
                <Text style={styles.updateButtonText}>Update Info</Text>
              </View>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    bottom: "7%",
  },
  inputContainer: {
    alignItems: "center",
  },
  updateButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "white",
    height: 60,
    width: 180,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 10,
  },
  updateButtonText: {
    fontSize: 20,
  },
});

export default ScholarshipForm;
