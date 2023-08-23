import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveString = async (key: string, value: string) => {
  return AsyncStorage.setItem(key, value);
};

export const save = async (key: string, value: any) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const load = async (key: string) => {
  return AsyncStorage.getItem(key);
};

export const remove = async (key: string) => {
  return AsyncStorage.removeItem(key);
};

export const removeAll = async () => {
  return AsyncStorage.clear();
};
