import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../../structural/PrimaryNav";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../structural/Footer";
import Drawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@material/react-drawer";
import colors from "../../utils/colors";
import lifepreserver from "../../static/img/1x/lifepreserver.png";
import background from "../../static/img/SVG/1x/waves.png";
import Button from "@material/react-button";
import { Grid } from "@material/react-layout-grid";
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
import "../../App.scss";
import { Parallax } from "react-skrollr";
import "../Landing/Landing.scss";
import MaterialIcon from "@material/react-material-icon";
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText
} from "@material/react-list";

class Landing extends Component {
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
    const data = {
      "data-bottom-top": "opacity: 1;transform: translate(-150px, 0px);",
      "data-center-center": "opacity: 1; transform: translate(0px, 0px);",
      "data-top-bottom": "opacity: 1;transform: translate(150px, 0px);"
    };

    return (
      <div style={{ height: `2200px` }}>
        <Cell columns={4}>
          <SideNav sideNavOpen={this.state.sideNavOpen} />
        </Cell>
        <Grid>
          <PrimaryNav sideNavToggle={this.sideNavToggle} />
          <Row style={{ margin: `0px 15% 0px 15%` }}>
            <Cell columns={8}>
              <H1>Inbox flooded with investor emails?</H1>
              <H4>We know. And we're here to lend a life line.</H4>
            </Cell>
          </Row>
        </Grid>
        <div>
          <section
            style={{
              marginTop: `50px`,
              height: `100%`,
              width: `100%`,
              marginBottom: `-1px`
            }}
          >
            <Parallax data={data} style={{ width: `100%`, height: `100%` }}>
              <div
                style={{
                  background: `no-repeat url(${background})`,
                  backgroundSize: `100% 100%`,
                  backgroundPositionX: `center`,
                  backgroundPositionY: `center`,
                  height: `500px`,
                  width: `100%`
                }}
              />
            </Parallax>
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                position: `absolute`,
                top: `50vh`,
                left: `50%`
              }}
            >
              <img
                style={{
                  width: `10vw`,
                  height: `10vh`,
                  zIndex: `9`
                }}
                src={lifepreserver}
              />
            </div>
          </section>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexFlow: "row wrap",
            textAlign: `center`,
            justifyContent: `center`,
            backgroundColor: `#f1dcf2`,
            height: `1200px`,
            zIndex: `9`
          }}
        >
          <Row style={{ margin: `0px 15% 0px 15%` }}>
            <Cell phoneColumns={8}>
              <Parallax
                data={{
                  "data-bottom-top":
                    "opacity: 0;transform: translate(-100%, 0px);",
                  "data-center-center":
                    "opacity: 1; transform: translate(0px, 0px);",
                  "data-top-bottom":
                    "opacity: 1;transform: translate(100%, 0px);"
                }}
                style={{ width: `100%` }}
              >
                <H4
                  style={{
                    width: `100%`,
                    fontWeight: `bold`,
                    lineHeight: `1.1`,
                    letterSpacing: `3px`
                  }}
                >
                  Reduce the sea of emails to a stream.{" "}
                </H4>
              </Parallax>
              <Parallax
                data={{
                  "data-bottom-top":
                    "opacity: 0;transform: translate(100%, 0px);",
                  "data-center-center":
                    "opacity: 1; transform: translate(0px, 0px);",
                  "data-top-bottom":
                    "opacity: 1;transform: translate(-100%, 0px);"
                }}
              />
            </Cell>
          </Row>
          <Row style={{ margin: `0px 15% 0px 15%` }}>
            <Cell phoneColumns={4} tabletColumns={8}>
              <div
                style={{
                  display: `flex`,
                  height: `100%`,
                  width: `100%`,
                  flexDirection: `column`
                }}
              >
                <H4>Problem</H4>
                <MaterialIcon
                  style={{
                    display: `block`,
                    fontSize: `48px`
                  }}
                  icon="visibility_off"
                />
                <H6>
                  There's an age-old adage — You cannot hit what you cannot see.
                </H6>
                <B2>
                  The fundamental lack of repeatable, efficicent communication
                  vehicle in the private investment ecosystem usually results in
                  hours of lost time, energy or worse — valuable contacts.
                </B2>
              </div>
            </Cell>
            <Cell
              phoneColumns={4}
              tabletColumns={8}
              style={{ display: `flex`, flexDirection: `column` }}
            >
              <div
                style={{
                  display: `flex`,
                  height: `100%`,
                  width: `100%`,
                  flexDirection: `column`
                }}
              >
                <H4>Solution</H4>
                <MaterialIcon
                  style={{
                    display: `block`,
                    fontSize: `48px`
                  }}
                  icon="group_work"
                />
                <H6>
                  A singularly focused tool providing a central channel through
                  which all of your investor related inquiries are co-located
                  and easily accessible.
                </H6>
              </div>
            </Cell>
            <Cell phoneColumns={4} tabletColumns={8}>
              <div
                style={{
                  display: `flex`,
                  height: `100%`,
                  width: `100%`,
                  flexDirection: `column`
                }}
              >
                <H4>Self-Actualization</H4>
                <MaterialIcon
                  style={{
                    display: `block`,
                    fontSize: `48px`
                  }}
                  icon="highlight"
                />
                <H6>We love Google Sheets, but how well does that scale?</H6>
                <H6>
                  We are stepping fundraising communication channels into 2019.
                  Come join us!
                </H6>

                <Button
                  href={"/product"}
                  style={{ minHeight: `50px` }}
                  outlined
                >
                  Check out what we're building
                </Button>
              </div>
            </Cell>
          </Row>
          <Row
            style={{
              marginTop: `4rem`,
              marginBottom: `4rem`,
              display: `flex`
            }}
          >
            <Cell phoneColumns={4}>
              <Card
                style={{
                  padding: `2rem`,
                  width: `80%`,
                  margin: `auto`,
                  maxWidth: `600px`
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`
                  }}
                >
                  <H3 style={{ textAlign: `center` }}>Sound familiar?</H3>
                  <H6>
                    "We've received probably 50 emails from potential private
                    equity and venture capital investors in the last 6 months.
                  </H6>
                  <S2 style={{ alignSelf: `center` }}>— Bill Gates</S2>
                  <H6>
                    "I just don't have time to respond to all of the private
                    equity shops. I'm just trying to run my business."
                  </H6>
                  <S2 style={{ alignSelf: `center` }}>— Warren Buffet</S2>
                  <H6>
                    "I'm not ready to take on outside investment yet. Especially
                    from the coasts."
                  </H6>
                  <S2 style={{ alignSelf: `center` }}>— Mark Cuban</S2>
                </div>
              </Card>
            </Cell>
          </Row>
        </div>
      </div>
    );
  }
}

export default Landing;
