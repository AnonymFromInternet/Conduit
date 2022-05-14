import { combineReducers } from "redux";

import authenticationReducer from "../../Modules/Authentication/Store/Reducer/AuthenticationReducer";

export default combineReducers({ authenticationReducer });
// Сюда должны импортироваться редьюсеры из отдельных компонентов
