import { createListenerMiddleware } from "@reduxjs/toolkit";

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "../Store/Slices/Register.slice";
import { AuthService } from "../Services/Auth.service";
import { TokenService } from "../../../Shared/Services/Token.service";

export const registerListener = createListenerMiddleware();

registerListener.startListening({
  actionCreator: registerAction,
  effect: async (action, listenerApi) => {
    // It gives to disable other listeners with this type:
    // listenerApi.cancelActiveListeners();
    AuthService.register(action.payload)
      .then((response) => {
        TokenService.setToken("accessToken", response.data.user.token);
        listenerApi.dispatch(registerSuccessAction(response.data.user));
        // ? Reloading page
        window.location.href = "/";
      })
      .catch((error) => {
        let data = error.response.data.errors;
        let errorsArray: string[] = [];
        Object.keys(data).forEach((element: string) => {
          errorsArray.push(`${element} ${data[element]}`);
        });
        listenerApi.dispatch(registerFailureAction(errorsArray.join(" ")));
      });
  },
});
