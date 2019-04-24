import React, { Component } from "react";
import PrimaryNav from "../../structural/navigation/primary-nav/PrimaryNav";
import SideNav from "../../structural/navigation/side-nav/SideNav";
import Footer from "../../structural/navigation/footer/Footer";
import { Grid, Cell, Row } from "@material/react-layout-grid";
import {
  Headline3 as H3,
  Headline4 as H4,
  Headline5 as H5,
  Headline6 as H6,
  Body1 as B1
} from "@material/react-typography";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavOpen: false
    };
    this.sideNavToggle = this.sideNavToggle.bind(this);
  }

  sideNavToggle(e) {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  }

  render() {
    return (
      <div style={{ height: `100vh` }}>
        <Cell columns={4}>
          <SideNav sideNavOpen={this.state.sideNavOpen} />
        </Cell>
        <Grid style={{ height: `100vh` }}>
          <PrimaryNav sideNavToggle={this.sideNavToggle} />
          <Row style={{ margin: `0px 15% 0px 15%` }}>
            <Cell columns={12}>
              <div
                style={{
                  display: `flex`,
                  margin: `0 auto`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  flexDirection: `column`
                }}
              >
                <H3 style={{ fontWeight: `bold` }}>
                  Fundraising shouldn't be a chore
                </H3>
                <ul>
                  <li>
                    <H6>Leave the opening salvos to us</H6>{" "}
                  </li>
                  <li>
                    <H6>Consolidate your channel(s) of communication</H6>{" "}
                  </li>
                  <li>
                    <H6>Reclaim your precious time and energy</H6>{" "}
                  </li>
                  <li>
                    <H6>
                      Get back to doing what you do best — building really great
                      products and services{" "}
                    </H6>
                  </li>
                </ul>
              </div>
            </Cell>
          </Row>
          <Row style={{ margin: `0px 15%` }}>
            <Cell columns={4}>
              <H4>Do one thing, and do it well.</H4>
              <B1>
                The scope of the utility Privatir will provide you is narrow by
                design: provide a single interface to collect, organize and
                eventually reference investor inquiries and the breadcrumbs of
                information typically lost in the unread email vortex. Act when
                YOU are ready.
              </B1>
            </Cell>
            <Cell columns={4}>
              <div style={{ display: `flex`, flexDirection: `column` }}>
                <H5>Collect, Order, Reference</H5>
                <B1>
                  Privatir aims to stand between you and what at times feels
                  like a ceaseless onslaught.
                </B1>
              </div>
            </Cell>
            <Cell columns={4}>
              <div style={{ display: `flex`, flexDirection: `column` }}>
                <H5>Know who and what you're engaging with</H5>
                <B1>
                  What good is a network if you can't tap into it quickly and
                  easily? Don't make it an email excavation project!
                </B1>
              </div>
            </Cell>
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Product;
