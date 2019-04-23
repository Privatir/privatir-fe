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

const NavLogoMobile = styled.svg`
  display: flex;
`;

const Footer = () => {
  return (
    <Row
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`
      }}
    >
      <hr
        style={{
          border: `0.01rem solid ${colors.primaryColor}`,
          minWidth: `70%`,

          marginTop: `40px`
        }}
      />
      <Cell
        phoneColumns={4}
        tabletColumns={8}
        desktopColumns={12}
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          minWidth: `70%`
        }}
      >
        <FooterLink to="/" surrounding={`light`}>
          Terms
        </FooterLink>
        <NavLogoMobile
          width="32"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="short"
        >
          <a href="/">
            <image
              xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg"
              height="50"
              width="32"
            />
          </a>
        </NavLogoMobile>

        <FooterLink to="/" surrounding={`light`}>
          {" "}
          Privacy
        </FooterLink>
      </Cell>
    </Row>
  );
};

export default Footer;
