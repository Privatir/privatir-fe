import React, { Component } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../structural/PrimaryNav";
import Footer from "../structural/Footer";
import SideNav from "../components/SideNav/SideNav";
import colors from "../utils/colors";
import lifepreserver from "../static/img/1x/lifepreserver.png";
import background from "../static/img/SVG/1x/waves.png";
import { Grid } from "@material/react-layout-grid";
import {
  Headline1 as H1,
  Headline2 as H2,
  Headline3 as H3,
  Headline4 as H4,
  Body1 as B1
} from "@material/react-typography";
import "../App.scss";
import { Parallax } from "react-skrollr";

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
      "data-bottom-top": "opacity: 1;transform: translate(-150px, -100px);",
      "data-center-center": "opacity: 1; transform: translate(0px, 0px);",
      "data-top-bottom": "opacity: 1;transform: translate(150px, 100px);"
    };

    return (
      <Grid>
        <PrimaryNav sideNavToggle={this.sideNavToggle} />
        <H3>Inbox flooded with investor emails?</H3>
        <H4>We know. And we're here to help.</H4>
        <section id="background" style={{ marginTop: `20px`, height: `100%` }}>
          <Parallax data={data} style={{}}>
            <div
              style={{
                background: `no-repeat url(${background})`,
                width: `100%`,
                zIndex: `-1`,
                height: `1000px`,
                backgroundPosition: `50% 50%`
              }}
            />
          </Parallax>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              position: `absolute`,
              top: `50%`,
              left: `45%`
            }}
          >
            <img
              style={{
                width: `300px`,
                height: `300px`,
                zIndex: `9`
              }}
              src={lifepreserver}
            />
          </div>
        </section>
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
              from potentional investors, both individuals and funds.
              Increasingly companies are being inundated with communication from
              investment arms. It can often feel like drinking from a firehose
            </B1>
            <H4>Privatir is here to change that</H4>
          </div>
        </Cell>
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
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
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
        </Row>
      </Grid>
    );
  }
}

export default Landing;
