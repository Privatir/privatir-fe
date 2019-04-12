import React from "react";
import { Product } from "./pages/Product";
import Landing from "./pages/Landing/Landing";
import "@material/react-button/dist/button.css";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import typography from "./utils/typography";

import { Grid } from "@material/react-layout-grid";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Landing} />
      </Router>
    );
  }
}

export default App;
