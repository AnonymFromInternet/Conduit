import { createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./RootReducer";
import { applyMiddleware } from "@reduxjs/toolkit";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export default store;
