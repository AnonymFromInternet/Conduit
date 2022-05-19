import axios from "axios";

import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";
import { apiUrl } from "../../../Shared/Types/Constants";
import { LoginRequestInterface } from "../Types/LoginRequest.interface";
import { TokenType } from "../Types/Token.type";

export class AuthService {
  static async register(data: RegisterRequestInterface) {
    return await axios.post(apiUrl + "/users", data);
  }
  static async login(data: LoginRequestInterface) {
    return await axios.post(apiUrl + "/users/login", data);
  }

  // Отправить токен на бэкенд
  static async getCurrentUser(token: TokenType) {
    return await axios.get(apiUrl + "/user", {
      headers: {
        authorization: `Token ${token}`,
      },
    });
  }
}
