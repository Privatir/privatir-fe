import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../../structural/navigation/primary-nav/PrimaryNav";
import SideNav from "../../structural/navigation/side-nav/SideNav";
import Footer from "../../structural/navigation/footer/Footer";
import lifepreserver from "../../static/img/1x/lifepreserver.png";
import background from "../../static/img/SVG/1x/waves.png";
import Button from "@material/react-button";
import TextField, { Input } from "@material/react-text-field";
import { Grid } from "@material/react-layout-grid";
import styled, { keyframes } from "styled-components";
import Card from "@material/react-card";
import Fab from "@material/react-fab";
import {
  Headline1 as H1,
  Headline3 as H3,
  Headline4 as H4,
  Headline6 as H6,
  Body1 as B1,
  Subtitle2 as S2
} from "@material/react-typography";
import { Parallax } from "react-skrollr";
import MaterialIcon from "@material/react-material-icon";
import fetch from "isomorphic-fetch";

const Testimonial = () => {
  return (
    <Row
      style={{
        marginTop: `4rem`,
        marginBottom: `4rem`,
        display: `flex`,
        justifyContent: `center`
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
              "We've received probably 50 emails from potential private equity
              and venture capital investors in the last 6 months.
            </H6>
            <S2 style={{ alignSelf: `center` }}>
              — BSB Sales Enablement SaaS CEO
            </S2>
            <H6>
              "I just don't have time to respond to all of the private equity
              shops. I'm just trying to run my business."
            </H6>
            <S2 style={{ alignSelf: `center` }}>— Healthcare SaaS CEO</S2>
            <H6>
              "I'm not ready to take on outside investment yet. Especially
              from the coasts."
            </H6>
            <S2 style={{ alignSelf: `center` }}> — eLearning SaaS CEO</S2>
          </div>
        </Card>
      </Cell>
    </Row>
  );
};

const BackgroundParallax = () => {
  const data = {
    "data-bottom-top": "opacity: 1;transform: translate(-150px, 0px);",
    "data-center-center": "opacity: 1; transform: translate(0px, 0px);",
    "data-top-bottom": "opacity: 1;transform: translate(150px, 0px);"
  };
  return (
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
              height: `80vh`,
              width: `100vw`
            }}
          />
        </Parallax>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            position: `absolute`,
            top: `70vh`,
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
            alt="life-preserver"
          />
        </div>
      </section>
    </div>
  );
};
const MainContent = () => {
  const dataLeftScroll = {
    "data-bottom-top": "opacity: 1;transform: translate(-100%, 0px);",
    "data-center-center": "opacity: 1; transform: translate(0px, 0px);",
    "data-top-bottom": "opacity: 1;transform: translate(100%, 0px);"
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexFlow: "row wrap",
        textAlign: `center`,
        justifyContent: `center`,
        backgroundColor: `#f1dcf2`,
        zIndex: `9`
      }}
    >
      <Row style={{ margin: `0px 15% 50px 15%` }}>
        <Cell phoneColumns={8}>
          <Parallax data={dataLeftScroll} style={{ width: `100%` }}>
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
            <B1>
              The fundamental lack of repeatable, efficicent communication
              vehicle in the private investment ecosystem usually results in
              hours of lost time, energy or worse — valuable contacts.
            </B1>
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
              which all of your investor related communications are co-located
              and easily accessible.
            </H6>
          </div>
        </Cell>
        <Cell
          phoneColumns={4}
          tabletColumns={8}
          style={{ marginBottom: `50px` }}
        >
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
              We are stepping fundraising communication channels into 2019. Come
              join us!
            </H6>

            <Button
              style={{
                minHeight: `70px`,
                display: `flex`,
                alignItems: `center`,
                marginTop: `10px`
              }}
              outlined
            >
              <Link to="/product/">
                <H6
                  style={{
                    margin: `0px`
                  }}
                >
                  Check out what we're building
                </H6>
              </Link>
            </Button>
          </div>
        </Cell>
      </Row>
    </div>
  );
};

const fadein = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const SubscriptionMessage = styled.div`
  animation: ${fadein} 1s ease-in;

  display: ${props => (props.submitted ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
`;

const SubscriptionInput = styled.div`
  display: ${props => (!props.submitted ? `flex` : `none`)};
`;

class EmailNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      submitted: false,
      submissionError: false
    };
  }

  onChange = e => {
    this.setState({ email: e.target.value });
  };

  postData = (url = "", data = {}) => {
    // Default options are marked with *
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cors: "cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: headers,
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        return response;
      }
    });

    // parses JSON response into native Javascript objects
  };

  onFabClick = e => {
    window.location.reload();
  };

  onSubmit = e => {
    this.postData(`https://api.privatir.com/api/newsletter_subscribe`, {
      email: this.state.email
    })
      .then(data => {
        this.setState({ email: "" });
        if (data.status === "202" || data.status === "200") {
          this.setState({ submitted: true });
          return data;
        } else {
          this.setState({ submitted: true, submissionError: true });
          return data;
        }
      })
      .catch(error => {
        this.setState({ submitted: true, submissionError: true });
        console.error(error);
      });

    e.preventDefault();
  };

  render() {
    return (
      <Row
        style={{
          margin: `0px 15% 0px 15%`,
          textAlign: `center`
        }}
      >
        <Cell
          desktopColumns={12}
          tabletColumns={8}
          style={{ display: `flex`, flexDirection: `column` }}
        >
          <H3>Coming Soon!</H3>
          <H4>We're working hard to get this product to launch!</H4>
          <H6>Join our newsletter and we'll keep you posted.</H6>
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: `100%`,
              marginTop: `50px`,
              marginBottom: `150px`
            }}
          >
            <div
              style={{
                width: `500px`,
                maxWidth: `100%`,
                position: `absolute`
              }}
            >
              <form onSubmit={this.onSubmit}>
                <SubscriptionInput submitted={this.state.submitted}>
                  <TextField
                    label="Please enter your email."
                    style={{ borderRadius: `50px`, width: `100%` }}
                  >
                    <Input
                      style={{ background: `#FFFFFF` }}
                      value={this.state.email}
                      name="subscribe"
                      onChange={this.onChange}
                      type="email"
                      required
                    />
                  </TextField>
                  <Button
                    style={{
                      position: `absolute`,
                      right: 0,
                      borderRadius: `50px`,
                      height: `56px`
                    }}
                    outlined
                  >
                    Subscribe
                  </Button>
                </SubscriptionInput>
                <SubscriptionMessage submitted={this.state.submitted}>
                  <Fab
                    onClick={this.onFabClick}
                    mini
                    icon={
                      this.state.submitted && !this.state.submissionError ? (
                        <MaterialIcon
                          style={{ color: `#018786` }}
                          icon="check"
                        />
                      ) : (
                        <MaterialIcon
                          icon="clear"
                          style={{ color: `#d82717` }}
                        />
                      )
                    }
                  />
                  {this.state.submitted && !this.state.submissionError ? (
                    <H6
                      style={{
                        margin: `0px 0px 0px 15px`,
                        fontWeight: `bold`
                      }}
                    >
                      You're now subscribed!
                    </H6>
                  ) : (
                    <H6
                      style={{
                        margin: `0px 0px 0px 15px`,
                        fontWeight: `bold`
                      }}
                    >
                      Something went wrong! Please try again.
                    </H6>
                  )}
                </SubscriptionMessage>
              </form>
            </div>
          </div>
        </Cell>
      </Row>
    );
  }
}

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
    return (
      <div style={{ height: `100vh` }}>
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
        <BackgroundParallax />
        <MainContent />
        <Testimonial />
        <EmailNotification />
        <Footer />
      </div>
    );
  }
}

export default Landing;
