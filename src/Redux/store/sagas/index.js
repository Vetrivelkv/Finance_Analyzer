import { all } from "redux-saga/effects";
import { LoginSaga } from "../Login/LoginSagas";


export default function* watchSagas() {
  //Combine sagas with
  yield all([LoginSaga()]);

  // OR
  // yield all([fork(LoginSaga),fork(TypesSaga)]);
}
