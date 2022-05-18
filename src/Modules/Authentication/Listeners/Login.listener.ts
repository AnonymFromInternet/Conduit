import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from "../Store/Slices/Register.slice";
import { AuthService } from "../Services/Auth.service";
import { TokenService } from "../../../Shared/Services/Token.service";

export const loginListenerMiddleware = createListenerMiddleware();

loginListenerMiddleware.startListening({
  actionCreator: loginAction,
  effect: async (action, listenerApi) => {
    AuthService.login(action.payload)
      .then((response) => {
        console.log("login successful", response);
        TokenService.setToken("accessToken", response.data.user.token);
        listenerApi.dispatch(loginSuccessAction(response.data.user));
      })
      .catch((error) => {
        console.log("login not successful");
        let data = error.response.data.errors;
        let errorsArray: string[] = [];
        Object.keys(data).forEach((element: string) => {
          errorsArray.push(`${element} ${data[element]}`);
        });
        listenerApi.dispatch(loginFailureAction(errorsArray.join(" ")));
      });
  },
});
