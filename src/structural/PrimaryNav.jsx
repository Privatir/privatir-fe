import React from "react";
import Button from "@material/react-button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Cell, Row } from "@material/react-layout-grid";
import colors from "../utils/colors";
import MaterialIcon from "@material/react-material-icon";
import IconButton from "@material/react-icon-button";

const StyledAnchor = styled(NavLink)`
  color: ${colors.secondaryColor};
  text-decoration: none;
  &:hover {
    border-bottom: 4px solid currentColor;
    display: inline-block;
  }
  &.active {
    border-bottom: 4px solid currentColor;
    color: ${colors.primaryColor};
    display: inline-block;
  }
`;

const NavMenuMobile = styled(IconButton)`
  @media (min-width: 768px) {
    &.mobileMenu {
      display: none;
    }
  }
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  @media (max-width: 767px) {
    &.menu {
      display: none;
    }
  }
`;

const PrimaryNav = props => {
  return (
    <Row style={{ margin: `10px 20px 30px 30px` }}>
      <Cell
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `flex-start`
        }}
        phoneColumns={2}
        tabletColumns={2}
        desktopColumns={4}
      >
        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <a href="/">
            <image
              xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg"
              height="50"
              width="50"
            />
          </a>
        </svg>

        {/**
<svg
          width="150"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <a href="/">
            <image
              xlinkHref="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg"
              height="100"
              width="150"
            />
          </a>
        </svg>
 */}
      </Cell>
      <Cell
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `flex-end`
        }}
        phoneColumns={2}
        tabletColumns={6}
        desktopColumns={8}
      >
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            width: `50%`,
            justifyContent: `flex-end`
          }}
        >
          <NavMenu className="menu">
            <StyledAnchor to="/team">Team</StyledAnchor>
            <StyledAnchor to="/product">Product</StyledAnchor>
          </NavMenu>
          <NavMenuMobile className="mobileMenu" onClick={props.sideNavToggle}>
            <MaterialIcon icon="menu" />
          </NavMenuMobile>
        </div>
      </Cell>
    </Row>
  );
};

export default PrimaryNav;
