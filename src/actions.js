export const loginSuccess = (user) => {
    return { type: 'LOGIN_SUCCESS', payload: user };
  };
  
  export const loginFailure = (error) => {
    return { type: 'LOGIN_FAILURE', payload: error };
  };
  
  export const saveUserDetails = (userDetails) => {
    return { type: 'SAVE_USER_DETAILS', payload: userDetails };
  };
  