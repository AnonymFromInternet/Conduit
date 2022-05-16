import { UserInterface } from "../../../Shared/Types/User.interface";

export interface UserStateInterface {
  isLoading: boolean;
  user: UserInterface | null;
  error: string | null;
}
