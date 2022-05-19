import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Roots/Roots";
import TopBarComponent from "./Shared/Components/TopBar/TopBar.component";

function App() {
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
