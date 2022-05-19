import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";
import { apiUrl } from "../../../Shared/Types/Constants";
import { LoginRequestInterface } from "../Types/LoginRequest.interface";
import customAxios from "../../../Shared/Services/AuthInterseptor.service";

export class AuthService {
  static async register(data: RegisterRequestInterface) {
    return await customAxios.post(apiUrl + "/users", data);
  }
  static async login(data: LoginRequestInterface) {
    return await customAxios.post(apiUrl + "/users/login", data);
  }

  // Отправить токен на бэкенд
  static async getCurrentUser() {
    return await customAxios.get(apiUrl + "/user");
  }
}
