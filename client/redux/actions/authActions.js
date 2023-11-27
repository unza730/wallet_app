// redux/actions/authActions.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api from "../../axiosApi/apiCall"; // Import your API functions

// Action type constants
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// Action creators

// Synchronous action creator for login
export const loginUser = (userData, successCallback, errorCallback) => {
  console.log("userData:--> ", userData);
  console.log("------------------before distpatch------------------------------------------------------: ")
 
  return async (dispatch) => {
    try {
      // Use your API function for user login
      const response = await api.login(userData);
      console.log("================================================0");
      console.log("response from backend after login ----- ", response);
     
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      await AsyncStorage.setItem('authToken', response.token);
      successCallback(response);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response ? error.response.data : "Something went wrong",
      });
      errorCallback(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  };
};



// Async action creator for user registration
export const registerUser = (userData, successCallback, errorCallback) => {
  console.log("userData:--> ", userData);
  console.log("------------------before distpatch------------------------------------------------------: ")
 
  return async (dispatch) => {
    try {
      // Use your API function for user registration
      const response = await api.signup(userData);
      console.log("================================================0");
      console.log("response:--> auth ationsssssss----- ", response, response.user.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response,
      });
      await AsyncStorage.setItem('authToken', response.user.token);
      successCallback(response);
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response ? error.response.data : "Something went wrong",
      });
      errorCallback(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  };
};
