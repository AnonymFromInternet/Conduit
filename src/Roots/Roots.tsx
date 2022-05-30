import { Navigate, Route, Routes } from "react-router-dom";

import RegisterComponent from "../Modules/Authentication/Components/Register.component";
import LoginComponent from "../Modules/Authentication/Components/Login.component";
import GlobalFeedComponent from "../Modules/GlobalFeed/Components/GlobalFeed.component";
import YourFeedComponent from "../Modules/YourFeed/Components/YourFeed.component";

const Roots = () => {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalFeedComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path={"/articles/:page"} element={<GlobalFeedComponent />} />
      <Route path={"/feed"} element={<YourFeedComponent />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default Roots;

//
