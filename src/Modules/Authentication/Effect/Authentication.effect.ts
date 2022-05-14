import axios from "axios";
import { UserInterface } from "../../../Shared/Types/User.interface";

const AuthenticationEffect = () => {
  // useSelector = isSubmitting
  // useEffect(() => {if(!isSubmitting) { return } axios }, [isSubmitting])
  const url = "https://conduit.productionready.io/api/articles";
  // Данные должны приходить от компонента
  let data = {
    email: "",
    password: "",
  };

  axios
    .request<UserInterface>({
      method: "POST",
      url: url,
      data: data,
    })
    .then((response) => {
      // success action
    })
    .catch((response) => {
      // failure action
    });
};
export default AuthenticationEffect;

// Должен быть общий контейнет, который грузится всегда. Каррент юзер чекер. Внутри него используется адрес и токен
//
