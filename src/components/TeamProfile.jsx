import React, { Component } from "react";
import {
  Headline2 as H2,
  Headline3 as H3,
  Headline4 as H4,
  Body1 as B1
} from "@material/react-typography";
import CamAvatar from "../assets/img/cam-avatar.jpg";

class TeamProfile extends Component {
  render() {
    return (
      <div className="avatar">
        <div className="avatar-pic">
          <img className="radius-circle shadow-light" src={CamAvatar} alt="" />
        </div>
        <div className="avatar-profile">
          <H3 className="slideup">Cameron Rison</H3>
          <H4 className="text-uppercase">Technical Co-Founder</H4>
        </div>
        <div className="body-content text-center">
          <B1>
            Cameron is a full stack developer focusing primarily in the
            infrastructure and devops realm of the software stack. Studying at
            the University of Texas @ Austin graduating with a BS in Computer
            Science. In past roles Cameron has worked in the tooling, system
            administration, and web development capacities at General Motors.
            Passionate about the ability of software to truly enrich the lives
            of its users, He aspires to build systems that enable software
            infrastructure to be not just automated, but automatic.
          </B1>
        </div>
      </div>
    );
  }
}

export default TeamProfile;
