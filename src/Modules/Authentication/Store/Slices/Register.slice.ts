import { UserStateInterface } from "../../Types/UserState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrentUserInterface } from "../../../../Shared/Types/CurrentUser.interface";
import { RootState } from "../../../../Shared/GlobalStore/RootState";
import { RegisterRequestInterface } from "../../Types/RegisterRequest.interface";

const initialState: UserStateInterface = {
  isLoading: false,
  user: null,
  error: null,
};

export const getUserSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerAction: (
      state,
      action: PayloadAction<RegisterRequestInterface>
    ) => {
      state.isLoading = true;
    },
    registerSuccessAction: (
      state,
      action: PayloadAction<CurrentUserInterface>
    ) => {
      state.user = action.payload;
    },
    registerFailureAction: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Exporting Actions:
export const { registerAction, registerSuccessAction, registerFailureAction } =
  getUserSlice.actions;

// Exporting Selectors:
export const isLoadingSelect = (state: RootState) => state.register.isLoading;
export const userSelect = (state: RootState) => state.register.user;
export const errorSelect = (state: RootState) => state.register.error;

// Exporting Reducer
export default getUserSlice.reducer;
