import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Roots/Roots";
import TopBarComponent from "./Shared/Components/TopBar.component";

function App() {
  return (
    <>
      <Router>
        <TopBarComponent />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
