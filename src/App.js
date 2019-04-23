import React from "react";
import Product from "./pages/Product";
import Team from "./pages/Team/Team";
import Landing from "./pages/Landing/Landing";
import "@material/react-button/dist/button.css";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import typography from "./utils/typography";
import { ParallaxProvider } from "react-skrollr";
import Footer from "./structural/Footer";
import { Grid } from "@material/react-layout-grid";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ height: `100%` }}>
          <ParallaxProvider
            init={{
              smoothScrollingDuration: 1000,
              smoothScrolling: true,
              forceHeight: false
            }}
            style={{ height: `100%` }}
          >
            {typography.injectStyles()}
            <Route path="/" exact component={Landing} />
            <Route path="/product/" component={Product} />
            <Route path="/team/" component={Team} />
          </ParallaxProvider>
        </div>
      </Router>
    );
  }
}

export default App;
