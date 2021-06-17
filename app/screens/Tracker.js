import React, { createRef, useEffect, useRef, useState } from "react";
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

function Tracker(props) {
  const [nextID, setNextID] = useState(0);
  const [scholarshipIDs, setScholarshipIDs] = useState([]);
  const scholarshipComponents = useRef({});
  const componentRefs = useRef([]);

  const addScholarship = () => {
    setScholarshipIDs([...scholarshipIDs, nextID]);
    const currentID = nextID;
    setNextID(currentID + 1);
    console.log("----------------");
  };

  const removeScholarship = (id, index) => {
    console.log("Removed Scholarship at Index: " + index);
    // Remove id from list to be rendered
    const scholarshipIDsCopy = [...scholarshipIDs];
    scholarshipIDsCopy.splice(index, 1);
    setScholarshipIDs(scholarshipIDsCopy);
    // Deletes scholarship from list of components
    delete scholarshipComponents.current["id" + id];
    reloadListNames(id);
    // console.log(scholarshipIDs);
  };

  const reloadListNames = async (id) => {
    for (let i = 0; i < componentRefs.current.length; i++) {
      if (componentRefs.current[i] !== null && i !== id) {
        await componentRefs.current[i].loadListName();
        console.log("reloaded: " + i);
      }
    }
  };

  return (
    <ImageBackground source={images.background} style={globalStyles.background}>
      {/* The contents at the top of the screen */}
      <View style={styles.topOfScreen}>
        <TopBar titleText={screenNames.tracker} />
        {/* A scrolling list of scholarships */}
        <View style={styles.listContainer}>
          <ScrollView style={styles.scrollingList}>
            {/* Maps out all scholarship IDs onto the display */}
            {scholarshipIDs.map((id, index) => {
              console.log("Id: " + id + " Index: " + index);

              const callbackRef = (ref) => (componentRefs.current[id] = ref);

              scholarshipComponents.current["id" + id] = (
                <Scholarship
                  id={id}
                  key={index}
                  index={index}
                  ref={callbackRef}
                  removeScholarship={removeScholarship}
                />
              );

              return scholarshipComponents.current["id" + id];
            })}
          </ScrollView>
        </View>
      </View>
      {/* Bottom of the Screen --> Contains Add Scholarship prompt and button  */}
      <View style={styles.bottomOfScreen}>
        <View style={styles.addScholarshipPrompt}>
          <Text style={styles.addScholarshipText} onPress={reloadListNames}>
            Add Scholarship
          </Text>
        </View>
        <Pressable onPress={addScholarship}>
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

export default Tracker;
