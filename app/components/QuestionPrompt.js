import React, { useState } from "react";
import { View, ImageBackground, Text, Pressable, Modal } from "react-native";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import InputScrollView from "react-native-input-scroll-view";
import PromptAnswerField from "./PromptAnswerField";

function QuestionPrompt(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {/* Modal Popup when component is pressed */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        {/* Modal Background */}
        <ImageBackground
          source={images.background}
          style={props.styles.modalBackground}
        >
          {/* Title */}
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={2}
            style={props.styles.modalTitle}
          >
            {props.title}
          </Text>
          <View style={props.styles.modalTextContainer}>
            <InputScrollView contentContainerStyle={globalStyles.scrollView}>
              <PromptAnswerField styles={props.styles} title={props.title} />
            </InputScrollView>
          </View>
          {/* Close Modal Button */}
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={props.styles.closeButton}>
              <Text style={props.styles.closeButtonText}>Close Selection</Text>
            </View>
          </Pressable>
        </ImageBackground>
      </Modal>
      {/* Option that appears on the page */}
      <Pressable
        style={props.styles.selectable}
        onPress={() => setModalVisible(true)}
      >
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={2}
          style={props.styles.selectableText}
        >
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
}

export default QuestionPrompt;
