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
import Activity from "../components/Activity";
import TopBar from "../components/TopBar";
import globalStyles from "../config/globalStyles";
import images from "../config/images";
import screenNames from "../config/screenNames";

function ActivityListScreen(props) {
  const scrollList = useRef();
  const [nextID, setNextID] = useState(0);
  const [activityIDs, setActivityIDs] = useState([]);
  const componentRefs = useRef([]);

  /**
   * Into local storage, saves the id of the next activity to be added
   * @param {Number} idToStore ID that should be retrieved on page load
   */
  const saveNextID = async (idToStore) => {
    try {
      await AsyncStorage.setItem("nextActivityID", String(idToStore));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Sets nextID state to value stored last time screen was open
   */
  const loadNextID = async () => {
    try {
      const loadedID = await AsyncStorage.getItem("nextActivityID");
      setNextID(Number(loadedID != null ? loadedID : 0));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Into local storage, saves list of all activity IDs present
   * @param {[Number]} idListToStore IDs to be rendered on page load
   */
  const saveActivityIDs = async (idListToStore) => {
    try {
      await AsyncStorage.setItem("activityIDList", String(idListToStore));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Sets activityIDs hook to value stored last time screen was open
   */
  const loadActivityIDs = async () => {
    try {
      const idList = await AsyncStorage.getItem("activityIDList");
      // Asyncstorage only stores strings
      // Returns activityIDs to an array of integer numbers
      setActivityIDs(
        idList != null ? idList.split(",").map((id) => Number(id)) : []
      );
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Adds a activity with a unique ID to the tracker list
   */
  const addActivity = () => {
    setActivityIDs([...activityIDs, nextID]);
    saveActivityIDs([...activityIDs, nextID]);
    const currentID = nextID;
    setNextID(currentID + 1);
    saveNextID(currentID + 1);
  };

  /**
   * Deletes the activity at the specified index
   * @param  {[Number]} id The unique id of the activity
   * @param  {[Number]} index The current index of the activity
   */
  const removeActivity = async (id, index) => {
    // Remove id from list to be rendered
    const activityIDsCopy = [...activityIDs];
    activityIDsCopy.splice(index, 1);
    setActivityIDs(activityIDsCopy);
    // Saves new list
    await saveActivityIDs(activityIDsCopy);
    // Reloads display names of all other activity
    reloadListNames(id);
  };

  /**
   * Reloads activity display names, excluding at the specified index
   * @param {*} id ID of the deleted activity that triggered rerender
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
    loadActivityIDs();
  }, []);

  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      {/* Contains the contents at the top of the screen */}
      <View style={styles.topOfScreen}>
        <TopBar titleText={screenNames.activities} />
        <View style={styles.listContainer}>
          <ScrollView ref={scrollList} style={styles.scrollingList}>
            {/* Maps out all activity IDs onto the display */}
            {activityIDs.map((id, index) => {
              /* Callback adds the reference of the rendered activity
                to the list of references*/
              const callbackRef = (ref) => (componentRefs.current[id] = ref);

              return (
                <Activity
                  id={id}
                  key={index}
                  index={index}
                  ref={callbackRef}
                  removeActivity={removeActivity}
                />
              );
            })}
            {/* Placeholder view allows scrollToEnd to show new activity */}
            <View style={{ height: 90 }}></View>
          </ScrollView>
        </View>
      </View>
      {/* Bottom of the screen, containing Add Activity prompt and button  */}
      <View style={styles.bottomOfScreen}>
        <View style={styles.addActivityPrompt}>
          <Text
            style={styles.addActivityText}
            onPress={() => {
              AsyncStorage.multiRemove(["nextActivityID", "activityIDList"]);
              // saveNextID(0);
              // saveActivityIDs([]);
            }}
          >
            Add Activity
          </Text>
        </View>
        {/* Add activity button */}
        {/* Focus bottom of activity list */}
        <Pressable
          onPress={() => {
            addActivity();
            scrollList.current.scrollToEnd();
          }}
        >
          <View style={styles.addActivityButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </Pressable>
      </View>

      {/* Pressing button adds new activity, increases id value, deleting activity clears asyncstorage data */}
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
  addActivityButton: {
    backgroundColor: "pink",
  },
  addActivityPrompt: {
    backgroundColor: "orange",
    justifyContent: "center",
  },
  addActivityText: {
    fontSize: 30,
  },
  plusText: {
    fontSize: 30,
  },
});

export default ActivityListScreen;
