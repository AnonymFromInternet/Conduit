import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import register from "../../Modules/Authentication/Store/Slices/Register.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./RootSaga/RootSaga";

// Create Saga middleware and disabling thunk:
const sagaMiddleware = createSagaMiddleware();
//const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
// Create Saga middleware and disabling thunk

export const store = configureStore({
  reducer: {
    register: register,
  },
  middleware: [sagaMiddleware],
});

// Saga Run:
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
