import { CurrentUserInterface } from "../../../Shared/Types/CurrentUser.interface";

export interface UserStateInterface {
  isLoading: boolean;
  user: CurrentUserInterface | null;
  error: string | null;
}
