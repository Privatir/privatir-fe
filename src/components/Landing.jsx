import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../components/PrimaryNav";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";

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
        <Cell columns={8}>
          <div
            style={{ display: "flex", flexFlow: "row wrap", marginTop: "5rem" }}
          >
            <h1 style={{ color: "#4D2C91", flex: " 3 1 auto" }}>
              {" "}
              Track, monitor and manage all of the inbound inquiries from
              potential investors{" "}
            </h1>
            <h2>All in ONE place. Eliminate the back & forth.</h2>
          </div>
        </Cell>
        <Cell columns={4} />
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
      <Row>
        <Cell columns={8}>
          <h4>
            The process of raising capital is going through a paradigm shift...
          </h4>
          <h4>
            More and more companies are being barraged with inbound inquiries
            from potentional investors, both individuals and funds.
          </h4>
          <h4>Privatir is here to change that!</h4>
          <h4>
            With Privatir you can keep track of all of those inbound inquiries
            and focus on growing and building your company.
          </h4>
        </Cell>
      </Row>
      <Row>
        <Cell columns={4}>
          <div
            style={{
              width: `300px`,
              height: `300px`,
              borderRadius: `5px`,
              backgroundColor: `#4D2C91`,
              textAlign: `center`
            }}
          >
            One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Cell>
        <Cell columns={4}>
          <div
            style={{
              width: `300px`,
              backgroundColor: `#FFF7F7`,
              borderRadius: `5px`,
              textAlign: `center`
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Cell>
        <Cell columns={4}>
          <div
            style={{
              width: `300px`,
              border: `solid 1px #4D2C91`,
              borderRadius: `5px`,
              textAlign: `center`
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Cell>
      </Row>
      <hr style={{ marginTop: `1rem` }} />
      <Footer />
    </div>
  );
};

export default Landing;
