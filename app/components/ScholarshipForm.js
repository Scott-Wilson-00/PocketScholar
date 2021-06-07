import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import globalStyles from "../config/globalStyles";

function ScholarshipForm(props) {
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{
          name: "",
          deadline: "",
          value: "",
          criteria: "",
          essayTopic: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          props.closeModal();
        }}
      >
        {(formikProps) => (
          <View style={{ alignItems: "center" }}>
            <TextInput
              maxLength={40}
              onChangeText={formikProps.handleChange("name")}
              placeholder="Scholarship Name"
              style={globalStyles.input}
              value={formikProps.values.name}
            />
            <TextInput
              maxLength={20}
              onChangeText={formikProps.handleChange("deadline")}
              placeholder="Deadline"
              style={globalStyles.input}
              value={formikProps.values.deadline}
            />
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              onChangeText={formikProps.handleChange("value")}
              placeholder="Value"
              style={globalStyles.input}
              value={formikProps.values.value}
            />
            <TextInput
              maxLength={40}
              textAlignVertical="center"
              onChangeText={formikProps.handleChange("criteria")}
              placeholder="Criteria"
              style={globalStyles.input}
              value={formikProps.values.criteria}
            />
            <TextInput
              maxLength={30}
              onChangeText={formikProps.handleChange("essayTopic")}
              placeholder="Essay Topic"
              style={globalStyles.input}
              value={formikProps.values.essayTopic}
            />
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
    alignItems: "center",
    flex: 20,
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
