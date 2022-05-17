import { AuthStateInterface } from "../../Types/AuthState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrentUserInterface } from "../../../../Shared/Types/CurrentUser.interface";
import { RootState } from "../../../../Shared/GlobalStore/RootState";
import { RegisterRequestInterface } from "../../Types/RegisterRequest.interface";
import { Simulate } from "react-dom/test-utils";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  user: null,
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
    },
    registerSuccessAction: (
      state,
      action: PayloadAction<CurrentUserInterface>
    ) => {
      state.isSubmitting = false;
      state.user = action.payload;
    },
    registerFailureAction: (state, action: PayloadAction<string>) => {
      state.isSubmitting = true;
      state.error = action.payload;
    },
  },
});

// Exporting Actions:
export const { registerAction, registerSuccessAction, registerFailureAction } =
  getUserSlice.actions;

// Exporting Selectors:
export const isLoadingSelect = (state: RootState) => state.auth.isSubmitting;
export const userSelect = (state: RootState) => state.auth.user;
export const errorSelect = (state: RootState) => state.auth.error;

// Exporting Reducer
export default getUserSlice.reducer;
