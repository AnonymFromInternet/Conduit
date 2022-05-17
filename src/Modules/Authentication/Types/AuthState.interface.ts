import { CurrentUserInterface } from "../../../Shared/Types/CurrentUser.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  user: CurrentUserInterface | null;
  error: any;
}
