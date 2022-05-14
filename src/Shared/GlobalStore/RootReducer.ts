import { combineReducers } from "redux";

import authenticationReducer from "../../Modules/Authentication/Store/Reducer/AuthenticationReducer";

const reducers = combineReducers({ auth: authenticationReducer });
export default reducers;
// Сюда должны импортироваться редьюсеры из отдельных компонентов
export type State = ReturnType<typeof reducers>;
