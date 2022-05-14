import { Dispatch } from "redux";

import { ActionTypes } from "../ActionTypes/ActionTypes";
import { UserInterface } from "../../../../Shared/Types/User.interface";
import { ActionInterface } from "../../Types/Action.interface";

export const loginAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.LOGIN });
  };
};

export const loginSuccessAction = (user: UserInterface) => {
  return (dispatch: Dispatch<ActionInterface>) => {
    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: user });
  };
};

export const loginFailureAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_FAILURE });
  };
};
