import AsyncStorage from "@react-native-async-storage/async-storage";
import Note from "../components/notes";

export const saveKey = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Saved succesfully!");
  } catch (error) {
    console.log(error);
  }
};

export const loadKey = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) {
      console.log("Value does not exist!");
    }
    if (value !== null) {
      console.log(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeKey = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Sucessfully deleted!");
  } catch (error) {
    console.log(error);
  }
};

export async function GetAllKeys(){
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log(e);
  }

  console.log(keys);
  <Note name={keys}></Note>
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};
