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
import { useNavigation } from "@react-navigation/native";
import Note from "../components/notes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveKey, loadKey, removeKey, GetAllKeys } from "../storage/storage";

export default function HomeScreen() {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();



  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.notesContainer}>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
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
