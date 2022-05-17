import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "../Store/Slices/Register.slice";
import { AuthService } from "../Services/Auth.service";

export const authListenerMiddleware = createListenerMiddleware();

// Создание слушателей, которые реагируют на определенные экшены:
authListenerMiddleware.startListening({
  actionCreator: registerAction,
  effect: async (action, listenerApi) => {
    // Можно отключить другие вызванные слушатели на этот же экшн
    listenerApi.cancelActiveListeners();

    // Асинхронный блок кода. Например обращение к API
    AuthService.register(action.payload)
      .then((response) => {
        listenerApi.dispatch(registerSuccessAction(response.data));
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
