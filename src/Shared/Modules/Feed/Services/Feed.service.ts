import customAxios from "../../../Services/AuthInterseptor.service";
import { apiUrl } from "../../../Types/Constants";

export class FeedService {
  static async getFeed(additionalUrl: string) {
    return customAxios.get(apiUrl + additionalUrl);
  }
}
