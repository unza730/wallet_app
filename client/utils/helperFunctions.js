export const getTokens = async () => {
    const token = await AsyncStorage.getItem('token');
    return token;
};