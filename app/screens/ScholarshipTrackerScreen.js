import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Scholarship from "../components/Scholarship";
import TopBar from "../components/TopBar";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";

function ScholarshipTracker(props) {
  const scrollList = useRef();
  const [nextID, setNextID] = useState(0);
  const [scholarshipIDs, setScholarshipIDs] = useState([]);
  const componentRefs = useRef([]);

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
      <View style={styles.topOfScreen}>
        <TopBar titleText={screenNames.tracker} />
        <View style={styles.listContainer}>
          <ScrollView ref={scrollList} style={styles.scrollingList}>
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
                />
              );
            })}
            {/* Placeholder view allows scrollToEnd to show new scholarship */}
            <View style={{ height: 90 }}></View>
          </ScrollView>
        </View>
      </View>
      {/* Bottom of the screen, containing Add Scholarship prompt and button  */}
      <View style={styles.bottomOfScreen}>
        <View style={styles.addScholarshipPrompt}>
          <Text
            style={styles.addScholarshipText}
            onPress={() => {
              AsyncStorage.multiRemove(["nextID", "idList"]);
              // saveNextID(0);
              // saveScholarshipIDs([]);
            }}
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
          <View style={styles.addScholarshipButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </Pressable>
      </View>

      {/* Pressing button adds new scholarship, increases id value, deleting scholarship clears asyncstorage data */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  topOfScreen: {
    justifyContent: "center",
    height: "12%",
    backgroundColor: "green",
    flex: 7,
  },
  bottomOfScreen: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listContainer: {
    backgroundColor: "yellow",
    borderRadius: 40,
    marginHorizontal: "5%",
    marginTop: 15,
    flex: 6,
    paddingVertical: 10,
  },
  scrollingList: {
    width: "100%",
  },
  addScholarshipButton: {
    backgroundColor: "pink",
  },
  addScholarshipPrompt: {
    backgroundColor: "orange",
    justifyContent: "center",
  },
  addScholarshipText: {
    fontSize: 30,
  },
  plusText: {
    fontSize: 30,
  },
});

export default ScholarshipTracker;
