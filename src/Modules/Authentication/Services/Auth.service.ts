import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";

import { apiUrl } from "../../../Shared/Types/Constants";
import axios from "axios";

export class AuthService {
  static async register(data: RegisterRequestInterface) {
    return await axios.post(apiUrl + "/users", data);
  }
  static async login(data: RegisterRequestInterface) {
    return await axios.post(apiUrl + "/login", data);
  }
}
