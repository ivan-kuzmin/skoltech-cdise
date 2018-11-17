import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Container, Sidebar, Menu, Dropdown } from "semantic-ui-react";

import Cdise from "./components/Header/cdise";
import Navbar from "./components/Header/navbar";
import AboutScreen from "./components/AboutScreen";
import PeopleScreen from "./components/PeopleScreen";
import NewsScreen from "./components/NewsScreen";
// import SearchScreen from "./components/SearchScreen";
import ContactsScreen from "./components/ContactsScreen";
import BackgroundImg from "./assets/images/bg.jpg";

const ContentContainer = styled.div`
  padding-bottom: 100px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ContentContainer>
          <Cdise />
          <Navbar />

          <Container style={{ background: "white", padding: "50px" }}>
            <Switch>
              <Route exact path="/" component={AboutScreen} />
              <Route path="/people" component={PeopleScreen} />
              <Route path="/news" component={NewsScreen} />
              <Route path="/contacts" component={ContactsScreen} />
              {/* <Route path="/news/search/?=:news" component={SearchScreen} /> */}
            </Switch>
          </Container>
        </ContentContainer>
      </Router>
    );
  }
}

export default App;
