import AsyncStorage from '@react-native-community/async-storage';

const useAsyncStorage = () => {
  const save = async <T>(key: string, item: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      console.error(e);
    }
  };

  const load = async <T>(key: string): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const clearAll = () => async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error(e);
    }
  };

  return {save, load, clearAll};
};

export default useAsyncStorage;
