import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import PrimaryNav from "../../structural/PrimaryNav";
import Footer from "../../structural/Footer";
import LandingAnimation from "../../components/LandingAnimation";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";
import colors from "../../utils/colors";
import "./Landing.scss";
import Graphic from "../../assets/img/illustration.png";
import Avatar from "../../assets/img/cam-avatar.jpg";
import {
  Headline2 as H2,
  Headline3 as H3,
  Headline4 as H4,
  Body1 as B1
} from "@material/react-typography";
import Button from "@material/react-button";
import Fab from "@material/react-fab";
import { Link } from "react-router-dom";

const PreLoader = () => {};

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preLoaderRendered: false
    };
    this.handlePreRenderComplete = this.handlePreRenderComplete.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const primaryNav = document.getElementsByClassName("primary-nav")[0];
    if (primaryNav.classList.contains("fade-in")) {
      primaryNav.classList.remove("fade-in");
    } else {
      primaryNav.classList.add("fade-in");
    }
  }
  handlePreRenderComplete() {
    setTimeout(() => {
      this.setState({
        preLoaderRendered: true
      });
    }, 4000);
  }
  render() {
    return (
      <div>
        <VelocityComponent
          animation={{
            translateY: this.state.preLoaderRendered ? "-100%" : "0%",
            easing: [0.7, 0, 0.3, 1]
          }}
          duration={1000}
        >
          <div id="loader-page">
            <VelocityComponent
              animation={{ opacity: 0.1, transitionY: `-80px` }}
              duration={400}
              complete={this.handlePreRenderComplete}
            >
              <span id="preloader">
                <span className="loader-fill" />
              </span>
            </VelocityComponent>
          </div>
        </VelocityComponent>
        <header className="cd-auto-hide-header">
          <div className="logo animate">
            <Link to="/" target="_target">
              <Fab
                icon={
                  <i
                    style={{ fontSize: `40px` }}
                    className="icon-privatir-shortform"
                  />
                }
              />
            </Link>
          </div>
        </header>
        <div className="main-wrapper content-center-align heightfull">
          <div className="content-wrapper text-center">
            <div className="title-wrapper">
              <H2>Drowing in a sea of PE & VC firm emails?</H2>
              <H3>Yes, we know. And we're here to help.</H3>
            </div>
            <div className="graphic background-image-holder">
              <img src={Graphic} alt="" />
            </div>

            <div className="socialmedia animate">
              <a href="#">
                <ion-icon name="logo-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="nav-overlap">
          <span />
        </div>
        <div className="content-overlap">
          <span />
        </div>
        <a
          href="#0"
          className="hamburger-menu animate"
          onClick={this.handleMenuClick}
        >
          Menu
          <span className="menu-icon" />
        </a>
        <div className="primary-nav">
          <div className="menu-content">
            <div className="avatar">
              <div className="avatar-pic">
                <img
                  className="radius-circle shadow-light"
                  src={Avatar}
                  alt=""
                />
              </div>
              <div className="avatar-profile">
                <H3 className="slideup">Cameron Rison</H3>
                <H4 className="text-uppercase">Full Stack Engineer</H4>
              </div>
            </div>
            <div className="body-content text-center">
              <B1>
                I am full designer stack (UX/UI) and I am focusing user
                experience and interface design and I am curious about different
                perspectives, open to feedback and building transformative
                experiences for Web, Apps, consumer & enterprise software.
              </B1>
            </div>
            <div className="divider" />
            <div className="newsletter text-center">
              <h6>For more info, Join our subscriber!</h6>
              <form className="form" action="">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Enter your email"
                />
                <input type="submit" className="submit-btn" value="subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
