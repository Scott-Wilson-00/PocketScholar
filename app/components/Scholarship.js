import React, { useState } from "react";
import {
  View,
  Pressable,
  Text,
  Modal,
  StyleSheet,
  ImageBackground,
} from "react-native";
import globalStyles from "../config/globalStyles";
import images from "../config/images";

function ShortEditableField(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        style={styles.modalOutline}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <ImageBackground
          source={images.background}
          style={globalStyles.background}
        ></ImageBackground>
      </Modal>
      {/* A scholarship that can be pressed to open a formik form with all the info*/}
      <Pressable
        style={styles.selectable}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.header}>{props.header}</Text>
        <Text style={styles.field}>{props.field}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    color: "white",
    fontSize: 22,
    top: "7%",
    flex: 5,
  },
  header: {
    color: "white",
    fontSize: 15,
    flex: 2,
    paddingTop: "3%",
    paddingLeft: "5%",
  },
  modalContent: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
  modalOutline: {
    height: "20%",
    width: "50%",
  },
  selectable: {
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 25,
    flexDirection: "row",
    height: 75,
    justifyContent: "flex-start",
    marginHorizontal: 15,
    marginVertical: 15,
    width: "90%",
  },
});

export default ShortEditableField;
