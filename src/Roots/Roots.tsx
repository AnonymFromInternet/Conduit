import { Route, Routes } from "react-router-dom";

import RegisterComponent from "../Modules/Authentication/Components/Register.component";
import TopBarComponent from "../Shared/Components/TopBar.component";
import LoginComponent from "../Modules/Authentication/Components/Login.component";

const Roots = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
};
export default Roots;
