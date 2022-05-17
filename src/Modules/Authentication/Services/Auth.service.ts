import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";
import axios from "axios";

import { apiUrl } from "../../../Shared/Types/Constants";
import { AuthResponseInterface } from "../Types/AuthResponse.interface";

export class AuthService {
  static async get(data: RegisterRequestInterface) {
    return axios.request<AuthResponseInterface>({
      method: "post",
      url: apiUrl,
      data: data,
    });
  }
}
