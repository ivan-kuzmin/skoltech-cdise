import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";

class Search extends Component {
  render() {
    return (
      <Menu.Menu position="right" style={{ marginBottom: "30px" }}>
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search..."
            type="text"
            action={{
              onMouseDown: e => {
                alert("hi_there");
              }
            }}
          />
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

export default Search;
