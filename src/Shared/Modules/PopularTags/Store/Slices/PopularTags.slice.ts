import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PopularTagsStateInterface } from "../../Types/PopularTagsState.interface";
import { PopularTagType } from "../../../../Types/PopularTag.type";
import { RootState } from "../../../../GlobalStore/RootState";

const initialState: PopularTagsStateInterface = {
  popularTags: null,
  isLoading: false,
  errors: null,
};

const popularTagsSlice = createSlice({
  name: "popularTags",
  initialState,
  reducers: {
    getPopularTagsAction: (state) => {
      state.isLoading = true;
    },
    getPopularTagsSuccessAction: (
      state,
      action: PayloadAction<PopularTagType[]>
    ) => {
      state.isLoading = false;
      state.popularTags = action.payload;
    },
    getPopularTagsFailureAction: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

// Actions
export const {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction,
} = popularTagsSlice.actions;
// Actions

// Selectors
export const popularTagsSelector = (state: RootState) =>
  state.popularTags.popularTags;
export const isLoadingSelector = (state: RootState) =>
  state.popularTags.isLoading;
export const errorsSelector = (state: RootState) => state.popularTags.errors;
// Selectors

export default popularTagsSlice.reducer;
