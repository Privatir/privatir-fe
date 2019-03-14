import React from 'react';
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Blog } from './components/Blog'
import Landing from './components/Landing';
import '@material/react-button/dist/button.css';
import './App.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import typography from './utils/typography'

import { Grid } from '@material/react-layout-grid';

class App extends React.Component {
  render() {
    return (
      < Router >
        <Grid>
          {typography.injectStyles()}
          <Route path="/" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
        </Grid>
      </Router >
    );
  }
}

export default App