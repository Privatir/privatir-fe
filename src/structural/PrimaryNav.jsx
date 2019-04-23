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
  margin-right: 20px;
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
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    &.mobileMenu {
      display: none;
    }
  }
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  @media (max-width: 767px) {
    &.menu {
      display: none;
    }
  }
`;

const NavLogoMobile = styled.svg`
  display: flex;
  @media (min-width: 769px) {
    &.short {
      display: none;
    }
  }
`;
const NavLogo = styled.svg`
  @media (max-width: 768px) {
    &.long {
      display: none;
    }
  }
`;

const PrimaryNav = props => {
  return (
    <Row style={{ margin: `0px 15% 100px 15%` }}>
      <Cell
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `flex-start`,
          height: `50px`
        }}
        phoneColumns={2}
        tabletColumns={2}
        desktopColumns={4}
      >
        <NavLogo
          width="150"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="long"
        >
          <a href="/">
            <image
              xlinkHref="https://s3.amazonaws.com/privatir.com/Privatir-logo.svg"
              height="100"
              width="150"
            />
          </a>
        </NavLogo>
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
      </Cell>
      <Cell
        phoneColumns={2}
        tabletColumns={6}
        desktopColumns={8}
        style={{
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `50px`,
          justifyContent: `flex-end`
        }}
      >
        <NavMenu className="menu">
          <StyledAnchor exact={true} to="/team">
            Team
          </StyledAnchor>
          <StyledAnchor exact={true} to="/product">
            Product
          </StyledAnchor>
        </NavMenu>
        <NavMenuMobile className="mobileMenu" onClick={props.sideNavToggle}>
          <MaterialIcon icon="menu" style={{ fontSize: `28px` }} />
        </NavMenuMobile>
      </Cell>
    </Row>
  );
};

export default PrimaryNav;
