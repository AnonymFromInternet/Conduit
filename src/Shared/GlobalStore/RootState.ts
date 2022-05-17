import { configureStore } from "@reduxjs/toolkit";

import auth from "../../Modules/Authentication/Store/Slices/Register.slice";
import { authListenerMiddleware } from "../../Modules/Authentication/Listeners/Auth.listener";

export const store = configureStore({
  reducer: {
    auth: auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([authListenerMiddleware.middleware]),
  // Вроде позволяет добавлять другие слушатели через следующие .prepend()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
