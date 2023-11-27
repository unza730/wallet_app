// reducers/authReducer.js
const initialState = {
  user: null,
  isAuthenticated: false,
  registrationError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        registrationError: null,
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        registrationError: action.payload,
      };
    // Add other cases for different actions
    default:
      return state;
  }
};

export default authReducer;
