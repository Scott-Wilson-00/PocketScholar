import React, { Component, createRef } from "react";
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class PromptAnswerField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
    };
  }

  setResponse = (newResponse) => {
    this.setState({ response: newResponse });
  };

  saveResponse = async (response) => {
    try {
      if (response != null && response != undefined) {
        let trimmedResponse = response.trim();
        // console.log("Response accepted: " + trimmedResponse);
        // console.log("Untrimmed: " + response.length);
        // console.log("  Trimmed: " + trimmedResponse.length);
        await AsyncStorage.setItem(this.props.title, trimmedResponse);
      } else {
        console.log("Response was empty");
        await AsyncStorage.setItem(this.props.title, "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  loadResponse = async () => {
    try {
      const loadedResponse = await AsyncStorage.getItem(this.props.title);
      console.log("Loaded: " + loadedResponse);
      if (loadedResponse !== null) {
        this.setResponse(
          loadedResponse.length > 0
            ? loadedResponse + "\n\n\n\n\n\n\n\n\n"
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
