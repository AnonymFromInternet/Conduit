import { configureStore } from "@reduxjs/toolkit";

// Reducers
import auth from "../../Modules/Authentication/Store/Slices/Register.slice";
import feed from "../Modules/Feed/Store/Slices/Feed.slice";
import popularTags from "../Modules/PopularTags/Store/Slices/PopularTags.slice";
// Reducers

// Action Listeners
import { registerListener } from "../../Modules/Authentication/Listeners/Register.listener";
import { loginListener } from "../../Modules/Authentication/Listeners/Login.listener";
import { getCurrentUserListener } from "../../Modules/Authentication/Listeners/GetCurrentUser.listener";
import { getFeedListener } from "../Modules/Feed/Listeners/Feed.listener";
import { getPopularTagsListener } from "../Modules/PopularTags/Listeners/GetPopularTags.listener";
// Action Listeners

export const store = configureStore({
  reducer: {
    auth: auth,
    feed: feed,
    popularTags: popularTags,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      registerListener.middleware,
      loginListener.middleware,
      getCurrentUserListener.middleware,
      getFeedListener.middleware,
      getPopularTagsListener.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
