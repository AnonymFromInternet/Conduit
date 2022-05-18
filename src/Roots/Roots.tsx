import { Route, Routes } from "react-router-dom";

import RegisterComponent from "../Modules/Authentication/Components/Register.component";
import TopBarComponent from "../Shared/Components/TopBar.component";

const Roots = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterComponent />} />
    </Routes>
  );
};
export default Roots;
