import React, { useState } from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  Text,
  View,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import images from "../config/images";
import PropTypes from "prop-types";
import StyledText from "react-native-styled-text";

function Selectable(props) {
  // Creates a bool and a function to set it
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
          {/* Text */}
          <View style={props.styles.modalTextContainer}>
            <ScrollView>
              <StyledText style={props.styles.modalText}>
                {props.text}
              </StyledText>
              {/* Link */}
              {() => {
                if (props.url) {
                  return (
                    <Text
                      style={props.styles.link}
                      onPress={() => {
                        try {
                          Linking.openURL(props.url);
                        } catch {}
                      }}
                    >
                      {props.linkName}
                    </Text>
                  );
                }
              }}
            </ScrollView>
          </View>
          {/* Close Modal Button */}
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
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

Selectable.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Selectable.defaultProps = {
  title: "!!!!!!!",
  text: "!!!!!!!",
};

export default Selectable;
