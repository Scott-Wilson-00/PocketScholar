import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../config/colors";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import Scholarship from "../components/Scholarship";
import screenNames from "../config/screenNames";
import StyleSheetMaker from "../config/dynamicStyles";
import TopBar from "../components/TopBar";

function ScholarshipTracker(props) {
  let scholarshipStyle = StyleSheetMaker.createListItemStyle(
    colors.scholarshipTrackerPage.selectable,
    colors.scholarshipTrackerPage.displayText
  );
  let screenStyle = StyleSheetMaker.createListScreenStyle(
    colors.scholarshipTrackerPage.scrollContainer
  );

  const [nextID, setNextID] = useState(0);
  const [scholarshipIDs, setScholarshipIDs] = useState([]);
  const componentRefs = useRef([]);
  const scrollList = useRef();

  /**
   * Into local storage, saves the id of the next scholarship to be added
   * @param {Number} idToStore ID that should be retrieved on page load
   */
  const saveNextID = async (idToStore) => {
    try {
      await AsyncStorage.setItem("nextID", String(idToStore));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Sets nextID state to value stored last time screen was open
   */
  const loadNextID = async () => {
    try {
      const loadedID = await AsyncStorage.getItem("nextID");
      setNextID(Number(loadedID != null ? loadedID : 0));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Into local storage, saves list of all scholarship IDs present
   * @param {[Number]} idListToStore IDs to be rendered on page load
   */
  const saveScholarshipIDs = async (idListToStore) => {
    try {
      await AsyncStorage.setItem("idList", String(idListToStore));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Sets scholarshipIDs hook to value stored last time screen was open
   */
  const loadScholarshipIDs = async () => {
    try {
      const idList = await AsyncStorage.getItem("idList");
      // Asyncstorage only stores strings
      // Returns scholarshipIDs to an array of integer numbers
      setScholarshipIDs(
        idList != null ? idList.split(",").map((id) => Number(id)) : []
      );
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Adds a scholarship with a unique ID to the tracker list
   */
  const addScholarship = () => {
    setScholarshipIDs([...scholarshipIDs, nextID]);
    saveScholarshipIDs([...scholarshipIDs, nextID]);
    const currentID = nextID;
    setNextID(currentID + 1);
    saveNextID(currentID + 1);
  };

  /**
   * Deletes the scholarship at the specified index
   * @param  {[Number]} id The unique id of the scholarship
   * @param  {[Number]} index The current index of the scholarship
   */
  const removeScholarship = async (id, index) => {
    // Remove id from list to be rendered
    const scholarshipIDsCopy = [...scholarshipIDs];
    scholarshipIDsCopy.splice(index, 1);
    setScholarshipIDs(scholarshipIDsCopy);
    // Saves new list
    await saveScholarshipIDs(scholarshipIDsCopy);
    // Reloads display names of all other scholarships
    reloadListNames(id);
  };

  /**
   * Reloads scholarship display names, excluding at the specified index
   * @param {*} id ID of the deleted scholarship that triggered rerender
   */
  const reloadListNames = async (id) => {
    for (let i = 1; i < componentRefs.current.length; i++) {
      if (
        componentRefs.current[i] !== null &&
        componentRefs.current[i] !== undefined &&
        i !== id
      ) {
        await componentRefs.current[i].loadListName();
      }
    }
  };

  // Runs on component mount
  useEffect(() => {
    loadNextID();
    loadScholarshipIDs();
  }, []);

  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      {/* Contains the contents at the top of the screen */}
      <View style={screenStyle.topOfScreen}>
        <TopBar titleText={screenNames.tracker} />
        <View style={screenStyle.listContainer}>
          <ScrollView ref={scrollList} style={screenStyle.scrollingList}>
            {/* Maps out all scholarship IDs onto the display */}
            {scholarshipIDs.map((id, index) => {
              /* Callback adds the reference of the rendered scholarship
                to the list of references*/
              const callbackRef = (ref) => (componentRefs.current[id] = ref);

              return (
                <Scholarship
                  id={id}
                  key={index}
                  index={index}
                  ref={callbackRef}
                  removeScholarship={removeScholarship}
                  styles={scholarshipStyle}
                />
              );
            })}
            {/* Placeholder view allows scrollToEnd to show new scholarship */}
            <View style={{ height: 90 }}></View>
          </ScrollView>
        </View>
      </View>
      {/* Bottom of the screen, containing Add Scholarship prompt and button  */}
      <View style={screenStyle.bottomOfScreen}>
        <View style={screenStyle.addPrompt}>
          <Text
            style={screenStyle.addPromptText}
            numberOfLines={1}
            adjustsFontSizeToFit={true}
          >
            Add Scholarship
          </Text>
        </View>
        {/* Add scholarship button */}
        {/* Focus bottom of scholarship list */}
        <Pressable
          onPress={() => {
            addScholarship();
            scrollList.current.scrollToEnd();
          }}
        >
          <View style={screenStyle.addButton}>
            <Text style={screenStyle.addButtonText}>+</Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default ScholarshipTracker;
