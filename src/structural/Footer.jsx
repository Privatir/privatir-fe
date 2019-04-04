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
    <Row style={{ display: `flex`, justifyContent: `center` }}>
      <Cell
        columns={5}
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          flex: `2 1 300px`
        }}
      >
        <FooterLink to="/" surrounding={`light`}>
          Terms
        </FooterLink>
        <FooterLink to="/" surrounding={`light`}>
          {" "}
          Privacy
        </FooterLink>
        <FooterLink to="/" surrounding={`light`}>
          Status
        </FooterLink>
        <FooterLink to="/" surrounding={`light`}>
          Security
        </FooterLink>
      </Cell>
      <Cell
        columns={2}
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-around`,
          alignItems: `center`,
          flex: `1 1 300px`
        }}
      >
        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={colors.secondaryTextColor}
        >
          <a href="/">
            <image
              xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg"
              height="50"
              width="50"
            />
          </a>
        </svg>
        © 2019 Privatir LLC.
      </Cell>
      <Cell
        columns={5}
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          flex: `2 1 300px`
        }}
      >
        <FooterLink to="/contact" surrounding={`dark`}>
          Contact Us
        </FooterLink>
        <FooterLink to="/pricing" surrounding={`dark`}>
          Pricing
        </FooterLink>
        <FooterLink to="/api" surrounding={`dark`}>
          API
        </FooterLink>
        <FooterLink to="/blog" surrounding={`dark`}>
          Blog
        </FooterLink>
        <FooterLink to="/about" surrounding={`dark`}>
          About
        </FooterLink>
      </Cell>
    </Row>
  );
};

export default Footer;
