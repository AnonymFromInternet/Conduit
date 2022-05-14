import { AuthenticationStateInterface } from "../../Types/AuthenticationState.interface";
import { ActionTypes } from "../ActionTypes/ActionTypes";
import { ActionInterface } from "../../Types/Action.interface";

const initialState: AuthenticationStateInterface = {
  isLoggedIn: null,
  isSubmitting: false,
  user: null,
  errors: null,
};
const authenticationReducer = (
  state: AuthenticationStateInterface = initialState,
  action: ActionInterface
) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isSubmitting: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isSubmitting: false,
        user: action.payload,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isSubmitting: false,
        user: null,
        errors: "Error by login action",
      };
    default:
      return state;
  }
};
export default authenticationReducer;
