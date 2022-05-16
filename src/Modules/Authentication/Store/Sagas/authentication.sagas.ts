import { takeEvery } from "redux-saga/effects";
import {
  getUserAction,
  getUserSuccessAction,
} from "../Slices/Authentication.slice";

export function* getUserWatcher() {
  yield takeEvery(getUserAction().type, getUserWorker);
  yield takeEvery(getUserSuccessAction.type, getUserSuccessWorker);
}

export function* getUserWorker() {
  console.log("user action from worker");
  yield;
}

//export function* getUserSuccessWatcher() {
// yield takeEvery(getUserSuccessAction.type, getUserSuccessWorker);
//}

export function* getUserSuccessWorker(action: any) {
  console.log("payload is:", action.payload);
  yield;
}
