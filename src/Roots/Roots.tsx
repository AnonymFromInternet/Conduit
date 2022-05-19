import { Route, Routes } from "react-router-dom";

import RegisterComponent from "../Modules/Authentication/Components/Register.component";
import LoginComponent from "../Modules/Authentication/Components/Login.component";
import GlobalFeedComponent from "../Modules/GlobalFeed/Components/GlobalFeed.component";

const Roots = () => {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalFeedComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
};
export default Roots;
