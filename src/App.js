import React from "react";
import Product from "./pages/product/Product";
import Team from "./pages/team/Team";
import Landing from "./pages/landing/Landing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import typography from "./utils/typography";
import { ParallaxProvider } from "react-skrollr";
import "./App.scss";

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
