import { Link, NavLink } from "react-router-dom";

import { useAppSelector } from "../../GlobalStore/Hooks";

import "./TopBar.component.css";
import {
  isLoggedInSelect,
  userSelect,
} from "../../../Modules/Authentication/Store/Slices/Register.slice";

const TopBarComponent = () => {
  // Store
  const currentUser$ = useAppSelector(userSelect);
  const isLoggedIn$ = useAppSelector(isLoggedInSelect);
  // Store
  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand text-primary">
          Logo
        </Link>
        <form className="form form-inline">
          <div className={"nav-item form-control mr-sm-2"}>
            <NavLink
              className="nav-link"
              style={{ padding: "6px", color: "black" }}
              to={"/"}
            >
              Main Page
            </NavLink>
          </div>
          {isLoggedIn$ && (
            <>
              <div className={"nav-item form-control mr-sm-2 m-1"}>
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px", color: "black" }}
                  to={"/articles/new"}
                >
                  <i className="ion-compose"></i>
                  &nbsp; New Article
                </NavLink>
              </div>

              <div className="nav-item form-control mr-sm-2 m-1">
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px", color: "black" }}
                  to={"/settings"}
                >
                  <i className="ion-gear-a"></i>
                  &nbsp; Settings
                </NavLink>
              </div>

              <div className="nav-item form-control mr-sm-2 m-1">
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px", color: "black" }}
                  to={"/settings"}
                >
                  <i className="ion-gear-a"></i>
                  &nbsp;
                  {currentUser$?.username}
                </NavLink>
              </div>
            </>
          )}
          {!isLoggedIn$ && (
            <>
              <div className={"nav-item form-control mr-sm-2 m-1"}>
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px", color: "black" }}
                  to={"/login"}
                >
                  Sign in
                </NavLink>
              </div>

              <div className="nav-item form-control mr-sm-2 m-1">
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px", color: "black" }}
                  to={"/register"}
                >
                  Sign Up
                </NavLink>
              </div>
            </>
          )}
        </form>
      </div>
    </nav>
  );
};
export default TopBarComponent;
