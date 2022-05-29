import { FeedStateInterface } from "../../Types/FeedState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../GlobalStore/RootState";
import { GetFeedResponseInterface } from "../../Types/GetFeedResponse.interface";

const initialState: FeedStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getFeedAction: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.data = null;
    },
    getFeedSuccessAction: (
      state,
      action: PayloadAction<GetFeedResponseInterface>
    ) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getFeedFailureAction: (state) => {
      state.isLoading = false;
    },
  },
});

// Exporting actions
export const { getFeedAction, getFeedSuccessAction, getFeedFailureAction } =
  feedSlice.actions;

// Exporting selectors
export const isLoadingSelect = (state: RootState) => state.feed.isLoading;
export const dataSelect = (state: RootState) => state.feed.data;
export const errorSelect = (state: RootState) => state.feed.error;

export default feedSlice.reducer;
