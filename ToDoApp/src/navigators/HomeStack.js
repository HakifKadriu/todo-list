import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AddNote from "../screens/AddNoteScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Taskify",
          headerStyle: {
            backgroundColor: "#140C24",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
          },
        }}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNote}
        options={{
          title: "Add Note",
          headerStyle: {
            backgroundColor: "#140C24",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
