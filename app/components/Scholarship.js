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

function Scholarship(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <ImageBackground
          source={images.background}
          style={globalStyles.background}
        >
          <Text onPress={() => setModalVisible(false)} style={styles.editTitle}>
            Edit Scholarship
          </Text>
        </ImageBackground>
      </Modal>
      {/* A scholarship that can be pressed to open a formik form with all the info*/}
      <Pressable
        style={styles.selectable}
        onPress={() => setModalVisible(true)}
      >
        <Text numberOfLines={1} style={styles.name}>
          {props.name}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  editTitle: {
    color: "white",
    fontSize: 25,
  },
  name: {
    color: "white",
    fontSize: 22,
    paddingHorizontal: "5%",
  },
  selectable: {
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 25,
    height: 75,
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 15,
    width: "90%",
  },
});

export default Scholarship;
