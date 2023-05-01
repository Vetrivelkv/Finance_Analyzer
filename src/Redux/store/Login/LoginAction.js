import * as types from "./LoginTypes";

export const Login = (payload) => ({
  type: types.SET_SESSION,
  payload,
});

export const LoginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const sendToken = (payload) => ({
  type: types.SEND_TOKEN,
  payload,
});

export const verifyToken = (payload) => ({
  type: types.VERIFY_TOKEN,
  payload,
});
