
const initialState = {
    user: {
      email: '',
      password: '',
    },
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload, 
          isAuthenticated: true,
          error: null,
        };
      case 'REGISTER_USER':
        return {
          ...state,
          user: action.payload, 
          isAuthenticated: true, 
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  