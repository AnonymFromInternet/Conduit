import { UserInterface } from "../../../Shared/Types/User.interface";

export interface AuthenticationStateInterface {
  isLoggedIn: boolean | null;
  isSubmitting: boolean;
  user: UserInterface | null;
  errors: string | null;
}
