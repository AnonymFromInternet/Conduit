import { configureStore } from "@reduxjs/toolkit";

import auth from "../../Modules/Authentication/Store/Slices/Register.slice";
import { registerListenerMiddleware } from "../../Modules/Authentication/Listeners/Register.listener";
import { loginListenerMiddleware } from "../../Modules/Authentication/Listeners/Login.listener";
import { getCurrentUserListener } from "../../Modules/Authentication/Listeners/GetCurrentUser.listener";

export const store = configureStore({
  reducer: {
    auth: auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      registerListenerMiddleware.middleware,
      loginListenerMiddleware.middleware,
      getCurrentUserListener.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
