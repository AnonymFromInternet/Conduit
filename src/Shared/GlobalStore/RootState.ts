import { configureStore } from "@reduxjs/toolkit";
import getUserReducer from "../../Modules/Authentication/Store/Authentication.slice";

export const store = configureStore({
  reducer: {
    getUser: getUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
