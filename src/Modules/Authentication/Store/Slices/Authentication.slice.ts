import { UserStateInterface } from "../../Types/UserState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserInterface } from "../../../../Shared/Types/User.interface";
import { RootState } from "../../../../Shared/GlobalStore/RootState";

const initialState: UserStateInterface = {
  isLoading: false,
  user: null,
  error: null,
};

export const getUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserAction: (state) => {
      state.isLoading = true;
    },
    getUserSuccessAction: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload;
    },
    getUserFailureAction: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Exporting Actions:
export const { getUserAction, getUserSuccessAction, getUserFailureAction } =
  getUserSlice.actions;

// Exporting Selectors:
export const isLoadingSelect = (state: RootState) => state.getUser.isLoading;
export const userSelect = (state: RootState) => state.getUser.user;
export const errorSelect = (state: RootState) => state.getUser.error;

// Exporting Reducer
export default getUserSlice.reducer;
