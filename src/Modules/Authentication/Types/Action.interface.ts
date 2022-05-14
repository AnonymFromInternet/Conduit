import { ActionTypes } from "../Store/ActionTypes/ActionTypes";
import { UserInterface } from "../../../Shared/Types/User.interface";

export interface ActionInterface {
  type: ActionTypes;
  payload: UserInterface;
}
