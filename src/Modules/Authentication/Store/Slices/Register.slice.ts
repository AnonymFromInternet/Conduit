import { AuthStateInterface } from "../../Types/AuthState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrentUserInterface } from "../../../../Shared/Types/CurrentUser.interface";
import { RootState } from "../../../../Shared/GlobalStore/RootState";
import { RegisterRequestInterface } from "../../Types/RegisterRequest.interface";
import { BackendErrorsType } from "../../../../Shared/Types/BackendErrors.type";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  error: null,
};

export const getUserSlice = createSlice({
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
  },
});

// Exporting Actions:
export const { registerAction, registerSuccessAction, registerFailureAction } =
  getUserSlice.actions;

// Exporting Selectors:
export const isSubmittingSelect = (state: RootState) => state.auth.isSubmitting;
export const userSelect = (state: RootState) => state.auth.currentUser;
export const errorSelect = (state: RootState) => state.auth.error;
export const isLoggedInSelect = (state: RootState) => state.auth.isLoggedIn;

// Exporting Reducer
export default getUserSlice.reducer;
