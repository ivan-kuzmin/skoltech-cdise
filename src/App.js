import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Cdise from "./components/Header/cdise";
import Navbar from "./components/Header/navbar";
import AboutScreen from "./components/AboutScreen";
import PeopleScreen from "./components/PeopleScreen";
import NewsScreen from "./components/NewsScreen";
import NewsPage from "./components/NewsPage";
import ContactsScreen from "./components/ContactsScreen";

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
              <Route exact path="/news" component={NewsScreen} />
              <Route path="/contacts" component={ContactsScreen} />
              <Route
                exact
                path="/news/:id"
                render={props => <NewsPage {...props} />}
              />
            </Switch>
          </Container>
        </ContentContainer>
      </Router>
    );
  }
}

export default App;
