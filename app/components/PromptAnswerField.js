import React, { Component } from "react";
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class PromptAnswerField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
    };
  }

  /**
   * Updates component state
   * @param {String} newResponse Latest response from user
   */
  setResponse = (newResponse) => {
    this.setState({ response: newResponse });
  };

  /**
   * Stores updated response in device's local storage
   * @param {String} response Input saved when component unmounts
   */
  saveResponse = async (response) => {
    try {
      if (response != null && response != undefined) {
        let trimmedResponse = response.trim();
        await AsyncStorage.setItem(this.props.title, trimmedResponse);
      } else {
        await AsyncStorage.setItem(this.props.title, "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Loads response from device's local storage
   */
  loadResponse = async () => {
    try {
      const loadedResponse = await AsyncStorage.getItem(this.props.title);
      if (loadedResponse !== null) {
        this.setResponse(
          loadedResponse.length > 0
            ? loadedResponse + "\n".repeat(15)
            : loadedResponse
        );
      } else {
        this.setResponse("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.loadResponse();
  }

  componentWillUnmount() {
    this.saveResponse(this.state.response);
  }

  render() {
    return (
      <TextInput
        multiline={true}
        textAlign="left"
        onChangeText={(text) => {
          this.setResponse(text);
        }}
        // Ensures placeholder returns when response is deleted
        value={
          this.state.response.trim().length > 0 ? this.state.response : null
        }
        style={this.props.styles.input}
        placeholder={"Enter notes/response"}
        placeholderTextColor="rgba(50,50,50,0.8)"
      />
    );
  }
}

export default PromptAnswerField;
