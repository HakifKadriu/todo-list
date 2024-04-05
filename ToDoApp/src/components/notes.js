import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

export default function Note(props) {



  return (
    <View style={styles.notesContainer}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.content} numberOfLines={3}>
        Description
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notesContainer: {
    backgroundColor: "#7E64FF",
    height: 125,

    borderRadius: 20,

    paddingTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: "#cccccc",
    fontFamily: "sans-serif",
    fontSize: 18,
  },
  content: {
    color: "#cccccc",
    fontFamily: "sans-serif",
    fontSize: 14,
  },
});
