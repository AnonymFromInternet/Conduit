import { takeEvery } from "redux-saga/effects";

import {
  registerAction,
  registerSuccessAction,
} from "../Store/Slices/Register.slice";

export function* registerWatcher() {
  yield takeEvery(registerAction.type, registerWorker);
  yield takeEvery(registerSuccessAction.type, registerSuccessWorker);
}

export function* registerWorker(action: any) {
  console.log("user action from worker");
  yield;
}

export function* registerSuccessWorker(action: any) {
  console.log("payload is:", action.payload);
  yield;
}
export function* registerFailureWorker(action: any) {
  console.log("payload is:", action.payload);
  yield;
}
