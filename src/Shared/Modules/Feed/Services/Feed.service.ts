import axios from "axios";

import { apiUrl } from "../../../Types/Constants";
import { TokenService } from "../../../Services/Token.service";

export class FeedService {
  static async getFeed(additionalUrl: string) {
    const token = TokenService.getToken("accessToken");
    const customAxios = axios.create({
      baseURL: apiUrl,
      headers: { authorization: `Token ${token}` },
    });

    if (token === null) {
      return axios.get(apiUrl + additionalUrl);
    } else {
      return customAxios.get(apiUrl + additionalUrl);
    }
  }
}
