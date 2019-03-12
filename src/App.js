import React from 'react';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import './App.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import styled, { keyframes } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

import { Cell, Grid, Row } from '@material/react-layout-grid';

parnassusTheme.overrideStyles = ({ rhythm }, options) => ({
  "a": {
    color: "inherit",
    textDecoration: "none",
  },
  "a:hover": {
    color: "#7E57C2",
    textDecoration: "none"
  },
})

const typography = new Typography(parnassusTheme)

const up = keyframes`
                100% {
                    transform: translateX(470px);
                }
            `

const Ball = styled.g`
                   animation: ${up} 4s linear alternate infinite; 
                `

const StyledAnchor = styled(Link)`
    text-transform: uppercase;
    color: #4D2C91;
    text-decoration: none;
    &:hover {
      border-bottom: 4px solid currentColor;
      display: inline-block;
    }
    `
const Footer = () => {

  return (
    <Row style={{ display: `flex`, justifyContent: `center` }}>
      <Cell columns={5} style={{ display: `flex`, justifyContent: `space-around`, flex: `2 1 300px` }}>
        © 2019 GitHub, Inc.
        <Link to="/">
          Terms
        </Link>
        <Link to="/">
          Privacy
        </Link>
        <Link to="/">
          Status
        </Link>
        <Link to="/">
          Security
        </Link>
      </Cell>
      <Cell columns={2} style={{ display: `flex`, justifyContent: `space-around`, flex: `1 1 300px` }}>
        <svg width="50" height="50"
          xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <a href="/">
            <image xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg" height="50" width="50" />
          </a>
        </svg>
      </Cell>
      <Cell columns={5} style={{ display: `flex`, justifyContent: `space-around`, flex: `2 1 300px` }}>
        <Link to="/contact">
          Contact Us
        </Link>
        <Link to="/pricing">
          Pricing
        </Link>
        <Link to="/api">
          API
        </Link>
        <Link to="/blog">
          Blog
        </Link>
        <Link to="/about">
          About
        </Link>
      </Cell>
    </Row>
  )
}


class App extends React.Component {
  render() {
    return (
      < Router >
        <Grid>
          {typography.injectStyles()}
          <Row>
            <Cell columns={8}>
              <svg width="150" height="100"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <a href="/">
                  <image xlinkHref="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg" height="100" width="150" />
                </a>
              </svg>
            </Cell>
            <Cell columns={4} style={{ justifyContent: `space-around`, display: `flex`, alignItems: `center` }}>
              <StyledAnchor to="/about">About</StyledAnchor>
              <StyledAnchor to="/contact">Contact</StyledAnchor>
              <StyledAnchor to="/blog">Blog</StyledAnchor>
              <Button outlined={true}>Sign In</Button>
            </Cell>
          </Row>
          <Row>
            <Cell columns={8}>
              <div style={{ display: "flex", flexFlow: "row wrap", marginTop: "5rem" }}>
                <h1 style={{ color: "#4D2C91", flex: " 3 1 auto" }}> Track, monitor and manage
            all of the inbound inquiries from potential investors </h1>
                <h2>All in ONE place. Eliminate the back & forth.</h2>
              </div>
            </Cell>
            <Cell columns={4}>
            </Cell>
          </Row>
          <Row>
            <Cell columns={8}>
              <div style={{ display: `flex`, width: `80%`, margin: `auto`, justifyContent: `center` }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100"
                  width="500px" height="200px">
                  <line x1="0" y1="0" x2="0" y2="60" stroke="black" />
                  <g strokeWidth="0">
                    <g>
                      <Ball>
                        <circle cx="15" cy="30" r="15" />
                      </Ball>
                    </g>
                  </g>
                  <line x1="500" y1="0" x2="500" y2="60" stroke="black" />
                </svg>
              </div>
            </Cell>
          </Row>
          <Row>
            <Cell columns={8}>
              <h4>
                The process of raising capital is going through a paradigm shift...
              </h4>
              <h4>
                More and more companies are being barraged with inbound inquiries from potentional investors, both individuals and funds.
              </h4>
              <h4>
                Privatir is here to change that!
              </h4>
              <h4>With Privatir you can keep track of all of those inbound inquiries and focus on growing and building your company.
              </h4>
            </Cell>
          </Row>
          <Row>
            <Cell columns={4}>
              <div style={{ width: `300px`, height: `300px`, borderRadius: `5px`, backgroundColor: `#4D2C91`, textAlign: `center` }}>
                One
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            </Cell>
            <Cell columns={4}>
              <div style={{ width: `300px`, backgroundColor: `#FFF7F7`, borderRadius: `5px`, textAlign: `center` }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            </Cell>
            <Cell columns={4}>
              <div style={{ width: `300px`, border: `solid 1px #4D2C91`, borderRadius: `5px`, textAlign: `center` }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            </Cell>
          </Row>
          <hr style={{ marginTop: `1rem` }}></hr>
          <Footer />
        </Grid>
      </Router >
    );
  }
}

export default App