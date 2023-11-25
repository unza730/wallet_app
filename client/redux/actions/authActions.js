
export const loginUser = (email, password) => {
     return {
      type: 'LOGIN_SUCCESS',
      payload: { email, password }, 
    };
  };
  
  export const registerUser = (email, password) => {
     return {
      type: 'REGISTER_USER',
      payload: { email, password }, 
    };
  };


