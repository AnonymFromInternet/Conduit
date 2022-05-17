import { takeEvery } from "redux-saga/effects";

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
export function* registerWorker(action: any) {
  // axios
  AuthService.get(action.payload)
    .then((response) => {
      registerSuccessAction(response.data.user);
    })
    .catch((response) => {
      registerFailureAction(response);
    });
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
// Register workers
