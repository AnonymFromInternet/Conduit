import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Roots/Roots";

function App() {
  return (
    <>
      <Router>
        <h1>Hello React</h1>
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
