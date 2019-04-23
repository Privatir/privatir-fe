import { Cell, Row } from "@material/react-layout-grid";
import { Link } from "react-router-dom";
import React from "react";
import colors from "../utils/colors";
import styled from "styled-components";

const FooterLink = styled(Link)`
  &:hover {
    color: ${props =>
      props.surrounding === `light`
        ? colors.primary
        : colors.secondaryTextColor};
  }
`;

const Footer = () => {
  return (
    <Row
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        position: `absolute`,
        bottom: 0
      }}
    >
      <hr style={{ width: `100%` }} />
      <Cell
        phoneColumns={4}
        tabletColumns={8}
        desktopColumns={12}
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          minWidth: `500px`
        }}
      >
        <FooterLink to="/" surrounding={`light`}>
          Terms
        </FooterLink>
        <FooterLink to="/" surrounding={`light`}>
          {" "}
          Privacy
        </FooterLink>
      </Cell>
    </Row>
  );
};

export default Footer;
