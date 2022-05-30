import { FC, useEffect } from "react";

import { useAppSelector } from "../../../GlobalStore/Hooks";
import { isLoggedInSelector } from "../../../../Modules/Authentication/Store/Slices/Register.slice";
import { NavLink } from "react-router-dom";

interface FeedTogglerComponentProps {
  tagName?: string;
}

const FeedTogglerComponent: FC<FeedTogglerComponentProps> = ({ tagName }) => {
  // Store
  const isLoggedIn$ = useAppSelector(isLoggedInSelector);
  // Store

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink className="nav-link" to={isLoggedIn$ ? "/feed" : "/login"}>
            Your Feed
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Global Feed
          </NavLink>
        </li>

        {tagName && (
          <li className="nav-item">
            <NavLink className="nav-link" to={`/tags/${tagName}`}>
              #&nbsp;{tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
export default FeedTogglerComponent;
