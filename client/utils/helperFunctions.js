import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTokens = async () => {
    const token = await AsyncStorage.getItem('authToken');
    return token;
};