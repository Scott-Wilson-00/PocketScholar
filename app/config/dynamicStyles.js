import React from "react";
import { StyleSheet } from "react-native";
import colors from "./colors";

export default class StyleSheetMaker {
  static createSelectableStyle(color, displayTextColor, bodyBackgroundColor) {
    return StyleSheet.create({
      closeButton: {
        alignItems: "center",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 4,
        borderRadius: 10,
        height: 60,
        justifyContent: "center",
        marginBottom: 40,
        marginTop: 10,
        width: 180,
      },
      closeButtonText: {
        color: "white",
        fontFamily: "RobotoBold",
        fontSize: 20,
      },
      modalBackground: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
      },
      modalText: {
        color: "black",
        fontSize: 22,
        textAlign: "left",
      },
      modalTextContainer: {
        alignItems: "flex-start",
        backgroundColor: bodyBackgroundColor,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 10,
        height: "65%",
        justifyContent: "flex-start",
        paddingHorizontal: "5%",
        marginVertical: 10,
        paddingTop: 20,
        width: "90%",
      },
      link: {
        color: colors.resourcesPage.link,
        fontSize: 25,
        textAlign: "left",
      },
      modalTitle: {
        color: "white",
        fontFamily: "ChalkboyRegular",
        fontSize: 40,
        paddingHorizontal: "5%",
        paddingTop: 50,
        textAlign: "center",
      },
      selectable: {
        alignItems: "center",
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 25,
        height: 75,
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 15,
        paddingVertical: 10,
        width: "90%",
      },
      selectableText: {
        color: displayTextColor,
        fontFamily: "FjallaOneRegular",
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: "center",
      },
    });
  }
  static createInfoScreenStyle(scrollContainerColor) {
    return StyleSheet.create({
      scrollContainer: {
        alignItems: "center",
        backgroundColor: scrollContainerColor,
        borderRadius: 40,
        flex: 6,
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
      },
    });
  }
  static createListItemStyle(color, displayTextColor) {
    return StyleSheet.create({
      modalContentContainer: {
        alignItems: "center",
        flex: 20,
        justifyContent: "flex-end",
      },
      editTitle: {
        color: "white",
        flex: 0.4,
        fontFamily: "ChalkboyRegular",
        fontSize: 50,
        paddingBottom: "20%",
        textAlign: "center",
      },
      name: {
        color: displayTextColor,
        flex: 10,
        fontFamily: "FjallaOneRegular",
        fontSize: 22,
        paddingHorizontal: "5%",
      },
      removeButton: {
        color: displayTextColor,
        flex: 1,
        fontSize: 40,
        marginHorizontal: "5%",
      },
      selectable: {
        alignItems: "center",
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 25,
        flexDirection: "row",
        height: 75,
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginVertical: 15,
        width: "90%",
      },
    });
  }
  static createListScreenStyle(scrollContainerColor) {
    return StyleSheet.create({
      topOfScreen: {
        flex: 7,
        height: "12%",
        justifyContent: "center",
      },
      bottomOfScreen: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
      },
      listContainer: {
        backgroundColor: scrollContainerColor,
        borderRadius: 40,
        flex: 6,
        marginHorizontal: "5%",
        marginTop: 15,
        paddingVertical: 10,
      },
      scrollingList: {
        width: "100%",
      },
      addButton: {
        alignItems: "center",
        backgroundColor: "black",
        borderColor: "white",
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: "center",
        paddingHorizontal: 15,
      },
      addButtonText: {
        color: "white",
        fontFamily: "RobotoBold",
        fontSize: 40,
      },
      addPrompt: {
        backgroundColor: "black",
        borderColor: "white",
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
      },
      addPromptText: {
        color: "white",
        fontFamily: "RobotoBold",
        fontSize: 30,
      },
    });
  }
  static createFormStyle(fieldBorderColor) {
    return StyleSheet.create({
      input: {
        backgroundColor: "rgba(245,245,245,0.7)",
        borderColor: fieldBorderColor,
        borderRadius: 6,
        borderWidth: 2,
        fontSize: 21,
        marginHorizontal: 10,
        marginVertical: 10,
        minWidth: "70%",
        padding: 20,
        textAlign: "center",
      },
      formContainer: {
        bottom: "7%",
      },
      inputContainer: {
        alignItems: "center",
      },
      updateButton: {
        alignItems: "center",
        backgroundColor: "black",
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 4,
        height: 60,
        justifyContent: "center",
        marginTop: 10,
        width: 180,
      },
      updateButtonText: {
        color: "white",
        fontFamily: "RobotoBold",
        fontSize: 20,
      },
    });
  }
  static createPromptStyle(color, displayTextColor, bodyBackgroundColor) {
    return StyleSheet.create({
      selectable: {
        alignItems: "center",
        backgroundColor: color,
        borderColor: "black",
        borderRadius: 25,
        borderWidth: 3,
        height: 75,
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 15,
        paddingVertical: 10,
        width: "90%",
      },
      selectableText: {
        color: displayTextColor,
        fontFamily: "FjallaOneRegular",
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: "center",
      },
      modalBackground: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
      },
      modalTextContainer: {
        alignItems: "flex-start",
        backgroundColor: bodyBackgroundColor,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 3,
        height: "65%",
        justifyContent: "flex-start",
        marginVertical: 10,
        paddingHorizontal: "5%",
        paddingTop: 20,
        width: "90%",
      },
      modalTitle: {
        color: "white",
        fontFamily: "ChalkboyRegular",
        fontSize: 30,
        paddingHorizontal: "5%",
        paddingTop: 50,
        textAlign: "center",
      },
      closeButton: {
        alignItems: "center",
        backgroundColor: "black",
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 4,
        height: 60,
        justifyContent: "center",
        marginBottom: 40,
        marginTop: 10,
        width: 180,
      },
      closeButtonText: {
        color: "white",
        fontFamily: "RobotoBold",
        fontSize: 20,
      },
      input: {
        color: "black",
        fontSize: 20,
      },
    });
  }
}
