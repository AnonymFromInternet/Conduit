import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../GlobalStore/Hooks";

import "./TopBar.component.css";

const TopBarComponent = () => {
  // Store
  const currentUser$ = useAppSelector((state) => state.auth.currentUser);
  const isLoggedIn$ = useAppSelector((state) => state.auth.isLoggedIn);
  // Store
  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          Logo
        </Link>
        <form className="form form-inline">
          <div className={"nav-item form-control mr-sm-2"}>
            <NavLink className="nav-link" style={{ padding: "6px" }} to={"/"}>
              Main Page
            </NavLink>
          </div>
          {isLoggedIn$ && (
            <>
              <div className={"nav-item form-control mr-sm-2 m-1"}>
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px" }}
                  to={"/articles/new"}
                >
                  <i className="ion-compose"></i>
                  &nbsp; New Article
                </NavLink>
              </div>

              <div className="nav-item form-control mr-sm-2 m-1">
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px" }}
                  to={"/settings"}
                >
                  <i className="ion-gear-a"></i>
                  Settings
                </NavLink>
              </div>

              <div className="nav-item form-control mr-sm-2 m-1">
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px" }}
                  to={"/settings"}
                >
                  <i className="ion-gear-a"></i>
                  <img
                    style={{
                      width: "61px",
                      height: "16px",
                      borderRadius: "50%",
                    }}
                    className="user-picture m-1"
                    src={currentUser$?.image}
                    alt="userImage"
                  />
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
                  style={{ padding: "6px" }}
                  to={"/login"}
                >
                  Sign in
                </NavLink>
              </div>

              <div className="nav-item form-control mr-sm-2 m-1">
                <NavLink
                  className="nav-link"
                  style={{ padding: "6px" }}
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
