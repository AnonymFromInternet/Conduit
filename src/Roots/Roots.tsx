import { Route, Routes } from "react-router-dom";

import RegisterComponent from "../Modules/Authentication/Components/Register.component";

const Roots = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterComponent />} />
    </Routes>
  );
};
export default Roots;
