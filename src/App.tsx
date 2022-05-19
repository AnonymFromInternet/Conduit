import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Roots/Roots";
import TopBarComponent from "./Shared/Components/TopBar/TopBar.component";
import { useAppDispatch } from "./Shared/GlobalStore/Hooks";
import { getCurrentUserAction } from "./Modules/Authentication/Store/Slices/Register.slice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserAction());
  });
  return (
    <>
      <Router>
        <TopBarComponent />
        <h1>Hello React</h1>
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
