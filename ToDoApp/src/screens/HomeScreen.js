import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Note from "../components/notes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveKey, loadKey, removeKey, GetAllKeys } from "../storage/storage";

export default function HomeScreen() {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const getKeysFromAsyncStorage = async () => {
      try {
        const allKeys = await AsyncStorage.getAllKeys();
        setKeys(allKeys);
      } catch (error) {
        console.error("Error retrieving keys from AsyncStorage:", error);
      }
    };
    
    getKeysFromAsyncStorage();
  });
  
  // console.log(keys);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.notesContainer}>
          {keys.map((key, index) => (
            <Text key={index} name={key}>
              {key}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Pressable
          style={styles.addNoteButton}
          onPress={() => navigation.navigate("AddNote")}
        >
          <Image
            style={styles.addNoteImg}
            source={require("../images/addnote.png")}
          />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#140C24",
    // height: windowHeight,

    paddingHorizontal: 20,
  },
  titleText: {
    color: "#fff",
    fontSize: 32,
  },
  notesContainer: {
    marginVertical: 20,
    gap: 10,
  },
  bottomBar: {
    alignSelf: "center",
    paddingVertical: 5,
  },
  addNoteImg: {
    width: 40,
    height: 40,
  },
});
