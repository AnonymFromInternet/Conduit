import axios from "axios";
import { apiUrl } from "../Types/Constants";
import { TokenService } from "./Token.service";

const customAxios = axios.create({
  baseURL: apiUrl,
  headers: { authorization: `Token ${TokenService.getToken("accessToken")}` },
});
