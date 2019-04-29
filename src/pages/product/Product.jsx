import React, { Component } from "react";
import PrimaryNav from "../../structural/navigation/primary-nav/PrimaryNav";
import SideNav from "../../structural/navigation/side-nav/SideNav";
import Footer from "../../structural/navigation/footer/Footer";
import { Grid, Cell, Row } from "@material/react-layout-grid";
import colors from "../../utils/colors";
import {
  Headline3 as H3,
  Headline4 as H4,
  Headline6 as H6,
  Body1 as B1
} from "@material/react-typography";
import MarketSizeImage from "../../../src/static/img/market-size.png";
import ProductRoadmapImage from "../../../src/static/img/product-roadmap.png";

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
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
              <div
                style={{
                  display: `flex`,
                  margin: `0 auto`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  flexDirection: `column`
                }}
              >
                <H3 style={{ fontWeight: `bold`, textAlign: `center` }}>
                  Fundraising shouldn't be a chore
                </H3>
                <H6 style={{ textAlign: `center`, width: `90%` }}>
                  Leave the opening salvos to us. Consolidate your channel(s) of
                  communication, reclaim your precious time and energy and get
                  back to doing what you do best — building really great
                  products and services .
                </H6>
              </div>
            </Cell>
            <Cell desktopColumns={12} tabletColumns={8}>
              <div style={{ display: `flex`, justifyContent: `center` }}>
                <hr
                  style={{
                    border: `0.01rem solid ${colors.primaryColor}`,
                    width: `30%`,
                    marginTop: `40px`
                  }}
                />
              </div>
            </Cell>
          </Row>
          <Row style={{ margin: `100px 15%` }}>
            <Cell desktopColumns={4} tabletColumns={8}>
              <H4 style={{ textAlign: `center` }}>
                Do one thing, and do it well.
              </H4>
              <B1 style={{ textAlign: `center` }}>
                The scope of the utility Privatir will provide you is narrow by
                design: provide a single interface to collect, organize and
                eventually reference investor inquiries and the breadcrumbs of
                information typically lost in the unread email vortex. Act when
                YOU are ready.
              </B1>
            </Cell>
            <Cell desktopColumns={4} tabletColumns={8}>
              <div style={{ display: `flex`, flexDirection: `column` }}>
                <H4 style={{ textAlign: `center` }}>
                  Collect, Order, Reference
                </H4>
                <B1 style={{ textAlign: `center` }}>
                  Privatir aims to stand between you and what at times feels
                  like a ceaseless onslaught.
                </B1>
              </div>
            </Cell>
            <Cell desktopColumns={4} tabletColumns={8}>
              <div style={{ display: `flex`, flexDirection: `column` }}>
                <H4 style={{ textAlign: `center` }}>Know the who and what</H4>
                <B1 style={{ textAlign: `center` }}>
                  What good is a network if you can't tap into it quickly and
                  easily? Don't make it an email excavation project!
                </B1>
              </div>
            </Cell>
            <Cell desktopColumns={12} tabletColumns={8}>
              <div style={{ display: `flex`, justifyContent: `center` }}>
                <hr
                  style={{
                    border: `0.01rem solid ${colors.primaryColor}`,
                    width: `30%`,
                    marginTop: `40px`
                  }}
                />
              </div>
            </Cell>
          </Row>

          <Row
            style={{
              margin: `100px 15% 0px 15%`
            }}
          >
            <Cell desktopColumns={7} tabletColumns={8}>
              <img
                style={{
                  width: `100%`,
                  height: `50%`,
                  zIndex: `9`
                }}
                src={MarketSizeImage}
                alt="market-size"
              />
            </Cell>
            <Cell desktopColumns={5} tabletColumns={8}>
              <H4>Market Dynamics</H4>
              <H6>
                The long term trends point toward a continued expansion of the
                PE/VC flavor of early-stage investment.
              </H6>
              <H6>
                Executives and decision makers who have the deepest insights
                into this currently disjointed space will be best positioned to
                capitalize and locate investment partners best aligned with the
                goals and direction of their respective organizations.
              </H6>
            </Cell>
            <Cell desktopColumns={12} tabletColumns={8}>
              <div style={{ display: `flex`, justifyContent: `center` }}>
                <hr
                  style={{
                    border: `0.01rem solid ${colors.primaryColor}`,
                    width: `30%`,
                    marginTop: `40px`
                  }}
                />
              </div>
            </Cell>
          </Row>
          <Row
            style={{
              margin: `100px 15% 0px 15%`
            }}
          >
            <Cell desktopColumns={5} tabletColumns={8}>
              <H4 style={{ textAlign: `center` }}>Proposed Product Roadmap</H4>
              <H6 style={{ textAlign: `center` }}>
                See where we're headed in the near term. Stay tuned for more
                soon!
              </H6>
            </Cell>
            <Cell desktopColumns={7} tabletColumns={8}>
              <img
                style={{
                  width: `100%`,
                  height: `50%`,
                  zIndex: `9`
                }}
                src={ProductRoadmapImage}
                alt="product-roadmap"
              />
            </Cell>
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Product;
