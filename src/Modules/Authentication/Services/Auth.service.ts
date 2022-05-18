import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";

import { apiUrl } from "../../../Shared/Types/Constants";
import axios from "axios";
import { LoginRequestInterface } from "../Types/LoginRequest.interface";

export class AuthService {
  static async register(data: RegisterRequestInterface) {
    return await axios.post(apiUrl + "/users", data);
  }
  static async login(data: LoginRequestInterface) {
    return await axios.post(apiUrl + "/users/login", data);
  }
}
