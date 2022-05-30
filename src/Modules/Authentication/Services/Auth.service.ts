import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";
import { apiUrl } from "../../../Shared/Types/Constants";
import { LoginRequestInterface } from "../Types/LoginRequest.interface";
import axios from "axios";
import { TokenService } from "../../../Shared/Services/Token.service";

export class AuthService {
  static customAxios = axios.create({
    baseURL: apiUrl,
    headers: { authorization: `Token ${TokenService.getToken("accessToken")}` },
  });

  static async register(data: RegisterRequestInterface) {
    return await this.customAxios.post(apiUrl + "/users", data);
  }
  static async login(data: LoginRequestInterface) {
    return await this.customAxios.post(apiUrl + "/users/login", data);
  }
  static async getCurrentUser() {
    return await this.customAxios.get(apiUrl + "/user");
  }
}
