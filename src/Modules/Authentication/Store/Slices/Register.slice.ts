import { AuthStateInterface } from "../../Types/AuthState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrentUserInterface } from "../../../../Shared/Types/CurrentUser.interface";
import { RootState } from "../../../../Shared/GlobalStore/RootState";
import { RegisterRequestInterface } from "../../Types/RegisterRequest.interface";
import { BackendErrorsType } from "../../../../Shared/Types/BackendErrors.type";
import { LoginRequestInterface } from "../../Types/LoginRequest.interface";

const initialState: AuthStateInterface = {
  currentUserLoading: false,
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerAction: (
      state,
      action: PayloadAction<RegisterRequestInterface>
    ) => {
      state.isSubmitting = true;
      state.error = null;
    },
    registerSuccessAction: (
      state,
      action: PayloadAction<CurrentUserInterface>
    ) => {
      state.isSubmitting = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    registerFailureAction: (
      state,
      action: PayloadAction<BackendErrorsType>
    ) => {
      state.isSubmitting = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    loginAction: (state, action: PayloadAction<LoginRequestInterface>) => {
      state.isSubmitting = true;
      state.error = null;
    },
    loginSuccessAction: (
      state,
      action: PayloadAction<CurrentUserInterface>
    ) => {
      state.isSubmitting = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailureAction: (state, action: PayloadAction<BackendErrorsType>) => {
      state.isSubmitting = false;
      state.isLoggedIn = false;
      state.currentUser = null;
      state.error = action.payload;
    },
    getCurrentUserAction: (state) => {
      state.currentUserLoading = true;
      state.error = null;
    },
    getCurrentUserSuccessAction: (
      state,
      action: PayloadAction<CurrentUserInterface>
    ) => {
      state.currentUserLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    getCurrentUserFailureAction: (state) => {
      state.currentUserLoading = false;
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

// Exporting Actions:
export const {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} = authSlice.actions;

// Exporting Selectors:
export const isSubmittingSelector = (state: RootState) =>
  state.auth.isSubmitting;
export const userSelector = (state: RootState) => state.auth.currentUser;
export const errorSelector = (state: RootState) => state.auth.error;
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;

// Exporting Reducer
export default authSlice.reducer;
