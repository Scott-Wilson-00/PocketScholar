import React, { useState } from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import images from "../config/images";
import text from "../config/text";

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
          style={styles.modalBackground}
        >
          {/* Title */}
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.modalTitle}
          >
            {props.text}
          </Text>
          {/* Text */}
          <View style={styles.modalTextContainer}>
            <ScrollView style={styles.scrollingText}>
              <Text style={styles.modalText}>{text.aboutText.whatIsPS}</Text>
            </ScrollView>
          </View>
          {/* Close Modal Button */}
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close Selection</Text>
            </View>
          </Pressable>
        </ImageBackground>
      </Modal>
      {/* Option that appears on the page */}
      <Pressable
        style={styles.selectable}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectableText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
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
  closeButtonText: {
    fontSize: 20,
  },
  modalBackground: {
    alignItems: "center",
    flex: 1,
  },
  modalText: {
    fontSize: 20,
  },
  modalTextContainer: {
    alignItems: "center",
    height: "75%",
    justifyContent: "center",
    paddingTop: 20,
    width: "90%",
  },
  modalTitle: {
    fontSize: 30,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  scrollingText: {},
  selectable: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 25,
    height: 75,
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 15,
    width: "90%",
  },
  selectableText: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 10,
    textAlign: "center",
  },
});

export default Selectable;
