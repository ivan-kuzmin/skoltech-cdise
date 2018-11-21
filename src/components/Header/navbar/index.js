import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Dropdown, Sticky } from "semantic-ui-react";
import Research from "./research";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleDropdownClick = () => this.setState({ activeItem: null });

  render() {
    const { activeItem } = this.state;
    return (
      <Sticky>
        <Menu inverted style={{ margin: "0px", borderRadius: "0px" }}>
          <Container>
            <Menu.Item
              as={Link}
              to="/"
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/people"
              name="people"
              active={activeItem === "people"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link}
              to="/news"
              name="news"
              active={activeItem === "news"}
              onClick={this.handleItemClick}
            />

            <Dropdown
              simple
              item
              text="Research"
              icon={null}
              onClick={this.handleDropdownClick}
            >
              <Research />
            </Dropdown>

            <Menu.Item
              as={Link}
              to="/contacts"
              name="contacts"
              active={activeItem === "contacts"}
              onClick={this.handleItemClick}
            />
          </Container>
        </Menu>
      </Sticky>
    );
  }
}

export default Navbar;
