import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../config/colors";

function ActivityForm(props) {
  // The states to be modified by the loadEntries asyncstorage function
  // Used to initialize the Formik form when loaded
  const [initName, setInitName] = useState("");
  const [initInvolvementDate, setInitInvolvementDate] = useState("");
  const [initCommitment, setInitCommitment] = useState("");
  const [initRoles, setInitRoles] = useState("");
  const [initAwards, setInitAwards] = useState("");

  /**
   * Stores Formik form entries in device's local storage
   * @param {Object} entries Key value pairs of each form field
   */
  const saveEntries = async (entries) => {
    try {
      await AsyncStorage.multiSet([
        ["activityName" + props.id, entries.activityName.trim()],
        ["involvementDate" + props.id, entries.involvementDate.trim()],
        ["commitment" + props.id, entries.commitment.trim()],
        ["roles" + props.id, entries.roles.trim()],
        ["awards" + props.id, entries.awards.trim()],
      ]);
      // Defaults display name to 'New Activity' when field left empty
      props.updateListDisplayName(
        entries.activityName !== null && entries.activityName.length > 0
          ? entries.activityName
          : "New Activity"
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
        "activityName" + props.id,
        "involvementDate" + props.id,
        "commitment" + props.id,
        "roles" + props.id,
        "awards" + props.id,
      ]);
      setInitName(retrievedData[0][1] !== null ? retrievedData[0][1] : "");
      setInitInvolvementDate(
        retrievedData[1][1] !== null ? retrievedData[1][1] : ""
      );
      setInitCommitment(
        retrievedData[2][1] !== null ? retrievedData[2][1] : ""
      );
      setInitRoles(retrievedData[3][1] !== null ? retrievedData[3][1] : "");
      setInitAwards(retrievedData[4][1] !== null ? retrievedData[4][1] : "");
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
          activityName: initName,
          involvementDate: initInvolvementDate,
          commitment: initCommitment,
          roles: initRoles,
          awards: initAwards,
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
              onChangeText={formikProps.handleChange("activityName")}
              onFocus={() => props.setKeyboardCanShift(false)}
              placeholder="Name of activity/organization"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.activityName}
            />
            <TextInput
              maxLength={40}
              onChangeText={formikProps.handleChange("involvementDate")}
              onFocus={() => props.setKeyboardCanShift(false)}
              placeholder="Period of Involvement"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.involvementDate}
            />
            <TextInput
              maxLength={30}
              selectTextOnFocus={true}
              onChangeText={formikProps.handleChange("commitment")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Commitment: Hours/Week"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.commitment}
            />
            <TextInput
              maxLength={60}
              textAlignVertical="center"
              onChangeText={formikProps.handleChange("roles")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Key Roles/Responsibilities"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.roles}
            />
            <TextInput
              maxLength={50}
              onChangeText={formikProps.handleChange("awards")}
              onFocus={() => props.setKeyboardCanShift(true)}
              placeholder="Awards / Achievements"
              placeholderTextColor={colors.scholarshipTrackerPage.placeholder}
              style={props.styles.input}
              value={formikProps.values.awards}
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
export default ActivityForm;
