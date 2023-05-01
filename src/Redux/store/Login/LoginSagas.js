import { call, put } from "redux-saga/effects";
import API from "./LoginApis";
import * as ACTIONS from "./LoginAction";
import History from "../../../routes/History";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./LoginTypes";

export function* sagasLoginRequest(data) {
  try {
    const response = yield call(API.loginApi, data.payload);
    if (response) {
      if (response.data.token) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        History.push("/home");
        yield put(ACTIONS.LoginSuccess(response.data));
      }
    } else {
      throw console.error("login failed");
    }
  } catch (err) {
    console.log(err, "login error");
  }
}

export function* sagasTokenVerify(data) {
  try {
    const response = yield call(API.tokenVerifyApi, data.payload);
    if (response) {
      if (response.data) {
        yield put(ACTIONS.verifyToken(response.data.data));
      }
    }
  } catch (err) {
    console.log(err, "Token error");
    History.push("/login");
  }
}

export function* LoginSaga() {
  yield takeLatest(TYPES.SET_SESSION, sagasLoginRequest);
  yield takeLatest(TYPES.SEND_TOKEN, sagasTokenVerify);
}
