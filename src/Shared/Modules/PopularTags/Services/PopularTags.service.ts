import axios from "axios";

import { apiUrl } from "../../../Types/Constants";
import { GetPopularTagsResponseInterface } from "../Types/GetPopularTagsResponse.interface";

export class PopularTagsService {
  static async getPopularTags() {
    return axios.request<GetPopularTagsResponseInterface>({
      method: "get",
      url: apiUrl + "/tags",
    });
  }
}
