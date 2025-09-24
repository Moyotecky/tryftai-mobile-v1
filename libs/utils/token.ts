import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StorageKeyEnums {
  ACCESS_TOKEN = 'access_token',
}

export const getStorageAccessToken = async () => {
  const token = await AsyncStorage.getItem(StorageKeyEnums.ACCESS_TOKEN);

  return token;
};

export const updateStorageAccessToken = async (data: string) => {
  const token = await AsyncStorage.setItem(StorageKeyEnums.ACCESS_TOKEN, data);

  return token;
};
