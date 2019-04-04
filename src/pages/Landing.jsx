import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../structural/PrimaryNav";
import Footer from "../structural/Footer";
import LandingAnimation from "../components/LandingAnimation";
import colors from "../utils/colors";
import {
  Headline3 as H3,
  Headline4 as H4,
  Body1 as B1
} from "@material/react-typography";

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
      <br />
      <Row>
        <Cell columns={12}>
          <LandingAnimation />
        </Cell>
      </Row>
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
            <H4>Raising Capital</H4>
            <B1 style={{ padding: `0 10rem` }}>
              The process of raising capital is going through a paradigm shift
              More and more companies are being barraged with inbound inquiries
              from potentional investors, both individuals and funds.
            </B1>
            <H4>Privatir is here to change that</H4>
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
