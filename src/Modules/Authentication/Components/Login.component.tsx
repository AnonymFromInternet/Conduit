import { Link, Navigate } from "react-router-dom";

import BackendErrorMessagesComponent from "../../../Shared/Components/BackendErrorMessages/BackendErrorMessages.component";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/GlobalStore/Hooks";
import { useState } from "react";

import {
  errorSelector,
  isSubmittingSelector,
  loginAction,
  userSelector,
} from "../Store/Slices/Register.slice";
import { LoginRequestInterface } from "../Types/LoginRequest.interface";

const LoginComponent = () => {
  // Store
  const currentUser$ = useAppSelector(userSelector);
  const backendErrors$ = useAppSelector(errorSelector);
  const isSubmitting$ = useAppSelector(isSubmittingSelector);
  const dispatch = useAppDispatch();
  // Store

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event: any): void {
    event.preventDefault();
    let user: LoginRequestInterface = {
      user: { email, password },
    };
    dispatch(loginAction(user));
  }
  return (
    <div className="auth-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link style={{ textDecoration: "none" }} to={`/register`}>
                Need an Account?
              </Link>
            </p>
            {currentUser$ !== null && <Navigate to={"/"} />}
            {backendErrors$ && (
              <BackendErrorMessagesComponent errors={backendErrors$} />
            )}
            <form>
              <fieldset>
                <fieldset className={"form-group"}>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className={"form-group"}>
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  disabled={isSubmitting$}
                  onClick={(e) => login(e)}
                  type={"submit"}
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Sign In
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
