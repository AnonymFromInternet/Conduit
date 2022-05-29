import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from "../Store/Slices/Register.slice";
import { AuthService } from "../Services/Auth.service";
import { TokenService } from "../../../Shared/Services/Token.service";

export const loginListener = createListenerMiddleware();

loginListener.startListening({
  actionCreator: loginAction,
  effect: async (action, listenerApi) => {
    AuthService.login(action.payload)
      .then((response) => {
        TokenService.setToken("accessToken", response.data.user.token);
        listenerApi.dispatch(loginSuccessAction(response.data.user));
      })
      .catch((error) => {
        let data = error.response.data.errors;
        let errorsArray: string[] = [];
        Object.keys(data).forEach((element: string) => {
          errorsArray.push(`${element} ${data[element]}`);
        });
        listenerApi.dispatch(loginFailureAction(errorsArray.join(" ")));
      });
  },
});
