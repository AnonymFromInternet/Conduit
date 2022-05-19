import { configureStore } from "@reduxjs/toolkit";

import auth from "../../Modules/Authentication/Store/Slices/Register.slice";
import feed from "../Modules/Feed/Store/Slices/Feed.slice";
import { registerListenerMiddleware } from "../../Modules/Authentication/Listeners/Register.listener";
import { loginListenerMiddleware } from "../../Modules/Authentication/Listeners/Login.listener";
import { getCurrentUserListener } from "../../Modules/Authentication/Listeners/GetCurrentUser.listener";
import { getFeedListener } from "../Modules/Feed/Listeners/Feed.listener";

export const store = configureStore({
  reducer: {
    auth: auth,
    feed: feed,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      registerListenerMiddleware.middleware,
      loginListenerMiddleware.middleware,
      getCurrentUserListener.middleware,
      getFeedListener.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
