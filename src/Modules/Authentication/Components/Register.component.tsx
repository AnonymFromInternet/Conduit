import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/GlobalStore/Hooks";
import {
  errorSelector,
  isSubmittingSelector,
  registerAction,
  userSelector,
} from "../Store/Slices/Register.slice";
import { RegisterRequestInterface } from "../Types/RegisterRequest.interface";
import BackendErrorMessagesComponent from "../../../Shared/Components/BackendErrorMessages/BackendErrorMessages.component";

const RegisterComponent = () => {
  // Store
  const isSubmitting$ = useAppSelector(isSubmittingSelector);
  const backendErrors$ = useAppSelector(errorSelector);
  const currentUser$ = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  // Store

  // Data from inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event: any): void {
    event.preventDefault();
    let user: RegisterRequestInterface = {
      user: { username, email, password },
    };
    dispatch(registerAction(user));
  }

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link style={{ textDecoration: "none" }} to={`/login`}>
                Have an Account?
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
                    onChange={(event) => setUsername(event.target.value)}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </fieldset>
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
                  Sign Up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterComponent;
