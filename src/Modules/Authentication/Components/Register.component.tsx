import { Link } from "react-router-dom";
import { useState } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/GlobalStore/Hooks";
import { registerAction } from "../Store/Slices/Register.slice";

const RegisterComponent = () => {
  const isLoadingState = useAppSelector((state) => state.register.isLoading);
  const dispatch = useAppDispatch();

  // Data from inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event: any): void {
    event.preventDefault();
    let userData = {
      username,
      email,
      password,
    };
    dispatch(registerAction(userData));
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
            Backend Errors are Here
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
                  onClick={(e) => login(e)}
                  type={"submit"}
                  className="btn btn-lg btn-success pull-xs-right"
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
