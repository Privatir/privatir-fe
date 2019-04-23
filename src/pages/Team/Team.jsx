import React, { Component } from "react";
import PrimaryNav from "../../structural/PrimaryNav";
import Footer from "../../structural/Footer";
import { Grid, Row, Cell } from "@material/react-layout-grid";
import SideNav from "../../components/SideNav/SideNav";
import CamAvatar from "../../static/img/cam-avatar.jpg";
import JamesAvatar from "../../static/img/james-avatar.jpg";
import MichaelAvatar from "../../static/img/michael-avatar.jpg";
import colors from "../../utils/colors";
import Card, { CardPrimaryContent } from "@material/react-card";
import {
  Headline1 as H1,
  Headline2 as H2,
  Headline3 as H3,
  Headline4 as H4,
  Headline5 as H5,
  Headline6 as H6,
  Body1 as B1,
  Body2 as B2,
  Subtitle1 as S1,
  Subtitle2 as S2
} from "@material/react-typography";

class Team extends Component {
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
        <Cell phoneColumns={4}>
          <SideNav sideNavOpen={this.state.sideNavOpen} />
        </Cell>
        <Grid style={{ height: `100vh` }}>
          <PrimaryNav sideNavToggle={this.sideNavToggle} />
          <Row style={{ margin: `0px 15% 0px 15%` }}>
            <Cell phoneColumns={4} tabletColumns={8} desktopColumns={12}>
              <H3 style={{ textAlign: `center` }}>Meet Our Team!</H3>
            </Cell>
            <Cell phoneColumns={4} tabletColumns={6} desktopColumns={6}>
              <Card style={{ maxWidth: `500px` }}>
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    width: `80%`,
                    margin: `auto`,
                    textAlign: `center`
                  }}
                >
                  <img
                    src={CamAvatar}
                    style={{
                      width: `150px`,
                      height: `150px`,
                      marginTop: `20px`,
                      borderRadius: `1000px`
                    }}
                  />
                  <H4 style={{ fontWeight: `bold` }}>Cameron Rison</H4>
                  <H6 style={{ color: `${colors.secondaryColorDark}` }}>
                    Co-Founder + SWE
                  </H6>
                  <B1>
                    Cam is a full stack SWE focused primarily on Infrastructure
                    and Site Reliability. He graduated from the University of
                    Texas @ Austin with a BS in Computer Science in 2014. Since
                    completing an undergraduate degree, Cam has worked @ GM
                    across the software stack continuing to grow in both depth
                    and breadth of software knowledge and expertise.
                  </B1>
                </div>
              </Card>
            </Cell>
            <Cell phoneColumns={4} tabletColumns={6} desktopColumns={6}>
              <Card style={{ maxWidth: `500px` }}>
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    width: `80%`,
                    margin: `auto`,
                    textAlign: `center`
                  }}
                >
                  <img
                    src={JamesAvatar}
                    style={{
                      width: `150px`,
                      height: `150px`,
                      marginTop: `20px`,
                      borderRadius: `1000px`
                    }}
                  />
                  <H4 style={{ fontWeight: `bold` }}>James Thwing</H4>
                  <H6 style={{ color: `${colors.secondaryColorDark}` }}>
                    Co-Founder + Operations{" "}
                  </H6>
                  <B1>
                    James has operational and finance experience in corporate
                    development, investment banking and private equity across a
                    variety of industry verticals. He also leads sourcing and
                    investment due diligence at the SaaS-focused Private Debt
                    and Equity firm Recurring Capital. James received a BS in
                    Mechanical Engineering from the University of Texas at
                    Austin and is currently pursuing an MBA at UT Austin.
                  </B1>
                </div>
              </Card>
            </Cell>
            <Cell phoneColumns={4} tabletColumns={6} desktopColumns={6}>
              <Card style={{ maxWidth: `500px` }}>
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    width: `80%`,
                    margin: `auto`,
                    textAlign: `center`
                  }}
                >
                  <img
                    src={MichaelAvatar}
                    style={{
                      width: `150px`,
                      height: `150px`,
                      marginTop: `20px`,
                      borderRadius: `1000px`
                    }}
                  />
                  <H4 style={{ fontWeight: `bold` }}>Michael Crowther</H4>
                  <H6 style={{ color: `${colors.secondaryColorDark}` }}>
                    Co-Founder + SWE{" "}
                  </H6>
                  <B1>
                    Michael is a full stack developer whose passionate about
                    technology, music, fitness, food and personal development. I
                    am currently working on an awesome team building a solution
                    that leverages Cyphre’s BlackTIE encryption technology to
                    protect enterprises that make use of an array of cloud
                    storage services.{" "}
                  </B1>
                </div>
              </Card>
            </Cell>
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Team;
