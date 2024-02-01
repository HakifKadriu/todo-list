import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { saveKey, loadKey, removeKey, getAllKeys } from "../storage/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function AddNote() {
  const navigation = useNavigation();

  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [keyID, addKeyID] = React.useState(0);

  const Note = {
    title: title,
    description: desc,
  };

  function saveNote() {
    let id = keyID + 1;
    saveKey("NoteID_" + id.toString(), JSON.stringify(Note));
    addKeyID(id);
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={{ color: "white" }}>Title: </Text>
            <TextInput
              style={styles.titleInput}
              onChangeText={setTitle}
              value={title}
              maxLength={40}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={{ color: "white" }}>Description: </Text>
            <TextInput
              style={styles.descInput}
              onChangeText={setDesc}
              multiline
              value={desc}
            />
          </View>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <Pressable
              style={styles.butonicancel}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ fontSize: 20 }}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.butoni} onPress={() => saveNote()}>
              <Text style={{ fontSize: 20 }}>Save</Text>
            </Pressable>
            <Pressable
              style={styles.butoni}
              onPress={() => loadKey("NoteID_" + keyID)}
            >
              <Text style={{ fontSize: 20 }}>Load</Text>
            </Pressable>
            <Pressable
              style={styles.butoni}
            //   onPress={() => removeKey("NoteID_" + keyID)}
              onPress={() => getAllKeys()}
            >
              <Text style={{ fontSize: 20 }}>Delete</Text>
            </Pressable>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#140C24",

    justifyContent: "center",
  },
  contentContainer: {
    height: 700,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  titleInput: {
    height: 50,
    width: windowWidth * 0.5,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
  descInput: {
    height: 400,
    width: windowWidth * 0.8,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    color: "white",

    textAlignVertical: "top",
  },
  butoni: {
    backgroundColor: "#00ff00",
    padding: 10,
    borderRadius: 20,
  },
  butonicancel: {
    backgroundColor: "#ff3300",
    padding: 10,
    borderRadius: 20,
  },
});
