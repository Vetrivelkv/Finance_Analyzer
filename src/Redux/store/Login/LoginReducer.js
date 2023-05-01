import * as types from "./LoginTypes";

const INITIAL_STATE = {};

// Replace with you own reducer
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.VERIFY_TOKEN:
      
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
