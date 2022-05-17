import { takeEvery, put, call } from "redux-saga/effects";

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "../Store/Slices/Register.slice";
import { AuthService } from "../Services/Auth.service";

// Register actions
export function* authWatcher() {
  // Register actions
  yield takeEvery(registerAction.type, registerWorker);
  yield takeEvery(registerSuccessAction.type, registerSuccessWorker);
  yield takeEvery(registerFailureAction.type, registerFailureWorker);
  // Register actions
}

// Register workers
export function* registerWorker(action: any) {}

export function* registerSuccessWorker(action: any) {
  console.log("success action");
  yield;
}
export function* registerFailureWorker(action: any) {
  console.log("failure action");
  yield;
}
// Register workers
