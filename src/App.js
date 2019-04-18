import React from "react";
import { Product } from "./pages/Product";
import Landing from "./pages/Landing";
import "@material/react-button/dist/button.css";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import typography from "./utils/typography";
import { ParallaxProvider } from "react-skrollr";

import { Grid } from "@material/react-layout-grid";

class App extends React.Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <ParallaxProvider
          init={{
            smoothScrollingDuration: 1000,
            smoothScrolling: true,
            forceHeight: false
          }}
        >
          <Router>
            <div>
              <Route path="/" exact component={Landing} />
              <Route path="/product" exact component={Product} />
            </div>
          </Router>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
