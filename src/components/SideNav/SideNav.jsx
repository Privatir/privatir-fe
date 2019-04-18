import React, { Component } from "react";
import Drawer, {
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent
} from "@material/react-drawer";
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

class SideNav extends Component {
  mainContentElem = React.createRef();

  constructor(props) {
    super(props);
  }

  onDrawerClose = () => {
    this.setState({ open: false });
    this.focusFirstFocusableItem();
  };
  render() {
    return (
      <div className="drawer-container">
        <Drawer dismissible open={this.props.open}>
          <DrawerHeader>
            <DrawerTitle tag="h2">Privatir</DrawerTitle>
          </DrawerHeader>
          <DrawerContent>
            <ListGroup>
              <ListGroupSubheader tag="h2">
                What We're Building
              </ListGroupSubheader>
              <List>
                <ListItem onClick={this.onListItemClick}>
                  <ListItemGraphic graphic={<MaterialIcon icon="build" />} />
                  <ListItemText primaryText="Product" />
                </ListItem>
              </List>
            </ListGroup>
            <ListDivider tag="div" />
            <ListGroup>
              <ListGroupSubheader tag="h2">Who We Are</ListGroupSubheader>
              <List>
                <ListItem onClick={this.onListItemClick}>
                  <ListItemGraphic graphic={<MaterialIcon icon="group" />} />
                  <ListItemText primaryText="Team" />
                </ListItem>
              </List>
            </ListGroup>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
