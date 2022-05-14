import axios from "axios";
import { UserInterface } from "../../../Shared/Types/User.interface";

const AuthenticationService = (url: string) => {
  // useSelector() - isSubmitting
  // useEffect(() => {
  // axios.get()
  // }, [isSubmitting])
  return axios.post(url, {}).then((response) => {
    const user: UserInterface = {
      email: response.data.email,
      token: response.data.token,
      image: response.data.image,
      username: response.data.username,
    };
  });
};
export default AuthenticationService;
