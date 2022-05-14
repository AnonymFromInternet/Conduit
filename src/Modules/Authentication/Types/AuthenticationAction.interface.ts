import { ActionTypes } from "../Store/ActionTypes/ActionTypes";
import { UserInterface } from "../../../Shared/Types/User.interface";

export interface AuthenticationActionInterface {
  type: ActionTypes;
  payload: UserInterface;
}
