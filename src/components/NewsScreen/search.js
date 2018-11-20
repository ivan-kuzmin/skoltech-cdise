import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";

class Search extends Component {
  render() {
    return (
      <Menu.Menu position="right" style={{ marginTop: '20px', marginBottom: "20px", width: '100%' }}>
        <Menu.Item>
          <Input
            style={{ width: '100%' }}
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
