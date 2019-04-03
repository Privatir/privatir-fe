import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../components/PrimaryNav";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import colors from "../utils/colors";
import {
  Headline3 as H3,
  Headline4 as H4,
  Headline5 as H5,
  Body1 as B1
} from "@material/react-typography";

const up = keyframes`
                100% {
                    transform: translateX(470px);
                }
            `;

const Ball = styled.g`
  animation: ${up} 4s linear alternate infinite;
`;

const Landing = () => {
  return (
    <div>
      <PrimaryNav />
      <Row>
        <Cell columns={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexFlow: "row wrap",
              margin: "5rem 3rem",
              textAlign: `center`,
              alignItems: `center`,
              justifyContent: `center`
            }}
          >
            <H3>
              {" "}
              Track, monitor and manage all of the inbound inquiries from
              potential investors{" "}
            </H3>
            <H4>All in ONE place. Eliminate the back & forth.</H4>
          </div>
        </Cell>
      </Row>
      <Row>
        <Cell columns={8}>
          <div
            style={{
              display: `flex`,
              width: `80 % `,
              margin: `auto`,
              justifyContent: `center`
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 100"
              width="500px"
              height="200px"
            >
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
      <br />
      <Row>
        <Cell columns={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexFlow: "row wrap",
              margin: "5rem 3rem",
              textAlign: `center`,
              alignItems: `center`,
              justifyContent: `center`
            }}
          >
            <H5>Raising Capital</H5>
            <B1 style={{ padding: `0 10rem` }}>
              The process of raising capital is going through a paradigm shift
              More and more companies are being barraged with inbound inquiries
              from potentional investors, both individuals and funds.
            </B1>
            <H5>Privatir is here to change that!</H5>
            <B1>
              With Privatir you can keep track of all of those inbound inquiries
              and focus on growing and building your business.
            </B1>
          </div>
        </Cell>
      </Row>
      <Row>
        <Cell columns={4}>
          <div
            style={{
              color: `${colors.secondaryTextColor}`,
              border: `solid 1px ${colors.secondaryColor}`,
              borderRadius: `5px`,
              backgroundColor: `${colors.secondaryColor}`,
              textAlign: `center`,
              height: `inherit`,
              width: `inherit`
            }}
          >
            <B1>
              One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </B1>
          </div>
        </Cell>
        <Cell columns={4}>
          <div
            style={{
              backgroundColor: `${colors.primaryColor}`,
              border: `solid 1px ${colors.primaryColor}`,
              borderRadius: `5px`,
              textAlign: `center`,
              height: `inherit`,
              width: `inherit`
            }}
          >
            <B1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </B1>
          </div>
        </Cell>
        <Cell columns={4}>
          <div
            style={{
              border: `solid 1px ${colors.secondaryColor}`,
              borderRadius: `5px`,
              textAlign: `center`,
              height: `inherit`,
              width: `inherit`
            }}
          >
            <B1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </B1>
          </div>
        </Cell>
      </Row>
      <hr style={{ marginTop: `1rem` }} />
      <Footer />
    </div>
  );
};

export default Landing;
