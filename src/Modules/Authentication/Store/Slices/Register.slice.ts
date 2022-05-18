import { AuthStateInterface } from "../../Types/AuthState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrentUserInterface } from "../../../../Shared/Types/CurrentUser.interface";
import { RootState } from "../../../../Shared/GlobalStore/RootState";
import { RegisterRequestInterface } from "../../Types/RegisterRequest.interface";
import { BackendErrorsType } from "../../../../Shared/Types/BackendErrors.type";
import { LoginRequestInterface } from "../../Types/LoginRequest.interface";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  error: null,
};

export const authSlice = createSlice({
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
} = authSlice.actions;

// Exporting Selectors:
export const isSubmittingSelect = (state: RootState) => state.auth.isSubmitting;
export const userSelect = (state: RootState) => state.auth.currentUser;
export const errorSelect = (state: RootState) => state.auth.error;
export const isLoggedInSelect = (state: RootState) => state.auth.isLoggedIn;

// Exporting Reducer
export default authSlice.reducer;
