import React from "react";
import PrimaryNav from "../structural/PrimaryNav";
import Footer from "../structural/Footer";
import { Cell, Row } from "@material/react-layout-grid";
import {
  Headline3 as H3,
  Headline4 as H4,
  Headline5 as H5,
  Body1 as B1
} from "@material/react-typography";

export const Product = () => {
  return (
    <div>
      <PrimaryNav />
      <Row>
        <Cell columns={12}>
          <div
            style={{
              display: `flex`,
              marginTop: `5rem`,
              margin: `0 auto`,
              justifyContent: `center`,
              alignItems: `center`,
              flexDirection: `column`
            }}
          >
            <H3>Death, Taxes, and Fundraising</H3>
            <H5 style={{ padding: `0 10rem`, textAlign: `center` }}>
              That last one may not be one of life's constants, but as any early
              stage veteran can attest, it can often feel that way.
            </H5>
            <br />
            <ul>
              <li>
                <H5>Leave the opening salvos to us</H5>{" "}
              </li>
              <li>
                <H5>Consolidate your channel(s) of communication</H5>{" "}
              </li>
              <li>
                <H5>Reclaim your precious time and energy</H5>{" "}
              </li>
              <li>
                <H5>
                  Get back to doing what you do best — building really great
                  products and services{" "}
                </H5>
              </li>
            </ul>
            <img
              src="https://s3.amazonaws.com/privatir.com/privatir-flow-diagram.svg"
              style={{ width: `1200px`, height: `800px` }}
              alt="ux-flowchart"
            />
          </div>
        </Cell>
      </Row>
      <Row>
        <Cell columns={4}>
          <div
            style={{
              display: `flex`,
              justifyContent: `space-evenly`,
              flexDirection: `column`
            }}
          >
            <H3>We adhere to the K.I.S.S. principle</H3>
            <H5>Keep. It. Simple. Stupid</H5>
            <B1>
              The scope of the utility Privatir will provide you is narrow by
              design: provide a single interface to collect, organize and
              eventually reference investor inquiries and the breadcrumbs of
              information typically lost in a sea of unread emails — when YOU
              are ready
            </B1>
          </div>
        </Cell>
        <Cell columns={4}>
          <div style={{ display: `flex`, flexDirection: `column` }}>
            <H4>Collect, Order, Reference</H4>
            <B1>
              Like the sentry posted on the watchtower, Privatir aims to stand
              between you and what at times feels like a ceaseless onslaught.
            </B1>
          </div>
        </Cell>
        <Cell columns={4} />
      </Row>
      <Footer />
    </div>
  );
};
