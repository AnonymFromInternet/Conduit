import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from "../Store/Slices/Register.slice";
import { AuthService } from "../Services/Auth.service";
import { TokenService } from "../../../Shared/Services/Token.service";

export const getCurrentUserListener = createListenerMiddleware();

getCurrentUserListener.startListening({
  actionCreator: getCurrentUserAction,
  effect: async (action, listenerApi) => {
    // Брать токен через Token Service тут и назначать в заголовки
    const token = TokenService.getToken("accessToken");
    if (!token || token === "") {
      listenerApi.dispatch(getCurrentUserFailureAction());
      return;
    }
    AuthService.getCurrentUser()
      .then((response) => {
        listenerApi.dispatch(getCurrentUserSuccessAction(response.data.user));
      })
      .catch((error) => {
        listenerApi.dispatch(getCurrentUserFailureAction());
      });
  },
});
