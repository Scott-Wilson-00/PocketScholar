import React from "react";
import { StyleSheet } from "react-native";
import colors from "./colors";

export default class StyleSheetMaker {
  static createSelectableStyle(color, displayTextColor, bodyBackgroundColor) {
    return StyleSheet.create({
      closeButton: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "black",
        height: 60,
        width: 180,
        borderColor: "white",
        borderWidth: 4,
        borderRadius: 10,
      },
      closeButtonText: {
        color: "white",
        fontSize: 20,
      },
      modalBackground: {
        alignItems: "center",
        flex: 1,
      },
      modalText: {
        fontSize: 22,
        color: "black",
        textAlign: "left",
      },
      modalTextContainer: {
        alignItems: "flex-start",
        backgroundColor: bodyBackgroundColor,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 10,
        height: "70%",
        justifyContent: "flex-start",
        paddingTop: 20,
        width: "90%",
        paddingHorizontal: "5%",
        marginVertical: 10,
      },
      link: {
        color: colors.resourcesPage.link,
        fontSize: 25,
        textAlign: "left",
      },
      modalTitle: {
        fontSize: 30,
        paddingTop: 50,
        paddingHorizontal: "5%",
        color: "white",
      },
      selectable: {
        alignItems: "center",
        backgroundColor: color,
        borderRadius: 25,
        height: 75,
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 15,
        width: "90%",
        paddingVertical: 10,
        borderColor: "black",
        borderWidth: 3,
      },
      selectableText: {
        color: displayTextColor,
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
        fontSize: 30,
        flex: 0.4,
        paddingBottom: "20%",
        textAlign: "center",
      },
      name: {
        color: displayTextColor,
        fontSize: 22,
        paddingHorizontal: "5%",
        flex: 10,
      },
      removeButton: {
        color: displayTextColor,
        fontSize: 40,
        marginHorizontal: "5%",
        flex: 1,
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
        justifyContent: "center",
        height: "12%",
        flex: 7,
      },
      bottomOfScreen: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
      listContainer: {
        backgroundColor: scrollContainerColor,
        borderRadius: 40,
        marginHorizontal: "5%",
        marginTop: 15,
        flex: 6,
        paddingVertical: 10,
      },
      scrollingList: {
        width: "100%",
      },
      addButton: {
        borderColor: "white",
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: "black",
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
      },
      addButtonText: {
        color: "white",
        fontSize: 40,
        paddingBottom: 5,
      },
      addPrompt: {
        borderColor: "white",
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: "black",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 8,
      },
      addPromptText: {
        color: "white",
        fontSize: 30,
      },
    });
  }
  static createFormStyle(fieldBorderColor) {
    return StyleSheet.create({
      input: {
        borderWidth: 2,
        borderColor: fieldBorderColor,
        padding: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 21,
        borderRadius: 6,
        backgroundColor: "rgba(245,245,245,0.7)",
        minWidth: "70%",
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
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "black",
        height: 60,
        width: 180,
        borderColor: "white",
        borderWidth: 4,
        borderRadius: 10,
      },
      updateButtonText: {
        color: "white",
        fontSize: 20,
      },
    });
  }
  static createPromptStyle(color, displayTextColor, bodyBackgroundColor) {
    return StyleSheet.create({
      selectable: {
        alignItems: "center",
        backgroundColor: color,
        borderRadius: 25,
        height: 75,
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 15,
        width: "90%",
        paddingVertical: 10,
        borderColor: "black",
        borderWidth: 3,
      },
      selectableText: {
        color: displayTextColor,
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: "center",
      },
      modalBackground: {
        alignItems: "center",
        flex: 1,
      },
      modalTextContainer: {
        alignItems: "flex-start",
        backgroundColor: bodyBackgroundColor,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 10,
        height: "70%",
        justifyContent: "flex-start",
        paddingTop: 20,
        width: "90%",
        paddingHorizontal: "5%",
        marginVertical: 10,
      },
      modalTitle: {
        fontSize: 30,
        paddingTop: 50,
        paddingHorizontal: "5%",
        color: "white",
      },
      closeButton: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "black",
        height: 60,
        width: 180,
        borderColor: "white",
        borderWidth: 4,
        borderRadius: 10,
      },
      closeButtonText: {
        color: "white",
        fontSize: 20,
      },
      input: {
        fontSize: 20,
        color: "black",
      },
    });
  }
}
