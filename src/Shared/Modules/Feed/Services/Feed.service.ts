import { apiUrl } from "../../../Types/Constants";
import axios from "axios";

export class FeedService {
  static async getFeed(additionalUrl: string) {
    return axios.get(apiUrl + additionalUrl);
  }
}
