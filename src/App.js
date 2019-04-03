import React from "react";
import { Product } from "./components/Product";
import Landing from "./components/Landing";
import "@material/react-button/dist/button.css";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import typography from "./utils/typography";

import { Grid } from "@material/react-layout-grid";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid>
          {typography.injectStyles()}{" "}
          <Route path="/" exact component={Landing} />
          <Route path="/product" exact component={Product} />
        </Grid>
      </Router>
    );
  }
}

export default App;
