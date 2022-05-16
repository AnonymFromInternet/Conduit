import { takeEvery } from "redux-saga/effects";
import {
  getUserAction,
  getUserSuccessAction,
} from "../Slices/Authentication.slice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { UserInterface } from "../../../../Shared/Types/User.interface";

export function* getUserWatcher() {
  yield takeEvery(getUserAction().type, getUserWorker);
}

export function* getUserWorker() {
  console.log("user action from worker");
  yield;
}

export function* getUserSuccessWatcher() {
  yield takeEvery(getUserSuccessAction.type, getUserSuccessWorker);
}

export function* getUserSuccessWorker(action: any) {
  console.log("payload is:", action.payload);
  yield;
}
