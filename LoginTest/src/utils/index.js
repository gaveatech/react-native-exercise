import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e) {
    console.log(e);
  }
};

const getData = async name => {
  var value = await AsyncStorage.getItem(name);
  return value;
};

export {getData, storeData};
