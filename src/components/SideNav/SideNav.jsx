import React, { Component } from "react";

import Drawer, {
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent
} from "@material/react-drawer";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import colors from "../../utils/colors";

import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListGroup,
  ListGroupSubheader,
  ListDivider
} from "@material/react-list";
import "../SideNav/SideNav.scss";
import MaterialIcon from "@material/react-material-icon";
import Button from "@material/react-button";

const StyledSideNavAnchor = styled(NavLink)`
  color: ${colors.secondaryColor};
  text-decoration: none;

  &.active {
    color: ${colors.primaryColor};
    border: none;
    display: inline-block;
  }
`;

class SideNav extends Component {
  mainContentElem = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  onDrawerClose = () => {
    this.setState({ open: false });
    this.focusFirstFocusableItem();
  };

  onClick = () => {
    this.props.sideNavToggle();
  };

  render() {
    return (
      <Drawer
        dismissible
        open={this.props.sideNavOpen}
        style={{ zIndex: `100` }}
      >
        <List singleSelection selectedIndex={this.state.selectedIndex}>
          <ListGroup>
            {" "}
            <ListItem>
              <StyledSideNavAnchor
                style={{ display: `flex`, alignItems: `center` }}
                to="/"
                exact={true}
              >
                <ListItemGraphic graphic={<MaterialIcon icon="home" />} />
                <ListItemText primaryText="Home" />
              </StyledSideNavAnchor>
            </ListItem>
            <ListItem>
              <StyledSideNavAnchor
                style={{ display: `flex`, alignItems: `center` }}
                to="/product/"
                exact={true}
              >
                <ListItemGraphic graphic={<MaterialIcon icon="build" />} />
                <ListItemText primaryText="Product" />
              </StyledSideNavAnchor>
            </ListItem>
            <ListItem>
              <StyledSideNavAnchor
                to="/team/"
                style={{ display: `flex`, alignItems: `center` }}
                exact={true}
              >
                <ListItemGraphic graphic={<MaterialIcon icon="group" />} />
                <ListItemText primaryText="Team" />
              </StyledSideNavAnchor>
            </ListItem>
          </ListGroup>
        </List>
      </Drawer>
    );
  }
}

export default SideNav;
