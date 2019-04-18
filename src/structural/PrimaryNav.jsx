import React from "react";
import Button from "@material/react-button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Cell, Row } from "@material/react-layout-grid";
import colors from "../utils/colors";
import MaterialIcon from "@material/react-material-icon";

const StyledAnchor = styled(NavLink)`
  color: ${colors.secondaryColor};
  text-decoration: none;
  &:hover {
    border-bottom: 4px solid currentColor;
    display: inline-block;
  }
  &.active {
    border-bottom: 4px solid currentColor;
    display: inline-block;
  }
`;

const PrimaryNav = props => {
  return (
    <Row style={{ width: `100%`, margin: `` }}>
      <Cell
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `flex-start`
        }}
        columns={4}
      >
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
      </Cell>
      <Cell
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `flex-end`
        }}
        columns={8}
      >
        <Button outlined onClick={props.sideNavToggle}>
          Subscribe
        </Button>
      </Cell>
    </Row>
  );
};

export default PrimaryNav;
