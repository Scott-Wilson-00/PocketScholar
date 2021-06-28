import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../config/colors";

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
        ["name" + props.id, entries.name.trim()],
        ["deadline" + props.id, entries.deadline.trim()],
        ["value" + props.id, entries.value.trim()],
        ["criteria" + props.id, entries.criteria.trim()],
        ["essayTopic" + props.id, entries.essayTopic.trim()],
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
    <View style={props.styles.formContainer}>
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
        // values is a string array of formik textinput values
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
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.name}
            />
            <TextInput
              maxLength={25}
              onChangeText={formikProps.handleChange("deadline")}
              onFocus={() => props.setKeyboardCanShift(false)}
              placeholder="Deadline"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.deadline}
            />
            <TextInput
              maxLength={25}
              onChangeText={formikProps.handleChange("value")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Value"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.value}
            />
            <TextInput
              maxLength={40}
              textAlignVertical="center"
              onChangeText={formikProps.handleChange("criteria")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Criteria"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.criteria}
            />
            <TextInput
              maxLength={40}
              onChangeText={formikProps.handleChange("essayTopic")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Essay Topic"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.essayTopic}
            />
            {/* Close and Update Form Button */}
            <Pressable onPress={formikProps.handleSubmit}>
              <View style={props.styles.updateButton}>
                <Text style={props.styles.updateButtonText}>Update Info</Text>
              </View>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default ScholarshipForm;
