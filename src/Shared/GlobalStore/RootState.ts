import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import getUserReducer from "../../Modules/Authentication/Store/Slices/Authentication.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./RootSaga/RootSaga";

// Create Saga middleware and disabling thunk:
const sagaMiddleware = createSagaMiddleware();
//const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
// Create Saga middleware and disabling thunk

export const store = configureStore({
  reducer: {
    getUser: getUserReducer,
  },
  middleware: [sagaMiddleware],
});

// Saga Run:
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Внутри configureStore есть middleware. Скорее всего туда можно положить applyMiddleWare(sagaMiddleWare)
// sagaMiddleWare.run() должен быть указан в определенном порядке
