import { CurrentUserInterface } from "../../../Shared/Types/CurrentUser.interface";
import { BackendErrorsType } from "../../../Shared/Types/BackendErrors.type";

export interface AuthStateInterface {
  currentUserLoading: boolean;
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface | null;
  error: BackendErrorsType | null;
}
