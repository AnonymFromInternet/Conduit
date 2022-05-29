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
  useEffect(() => {}, []);
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isLoggedIn$ && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/feed">
              Your Feed
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Global Feed
          </NavLink>
        </li>
        {tagName && (
          <li className="nav-item">
            <NavLink className="nav-link" to={`/tags/${tagName}`}>
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
export default FeedTogglerComponent;
