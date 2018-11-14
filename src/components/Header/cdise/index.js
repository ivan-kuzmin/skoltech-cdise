import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import BackgroundImg from "../../../assets/images/bg.png";

const CdiseContainer = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  color: white;
  padding: 60px 0;
  margin-bottom: 0px;
  text-align: center;
`;

class Cdise extends Component {
  render() {
    return (
      <CdiseContainer>
        <Container>
          <h1>Skoltech CDISE</h1>
          <h3>Center for Computational and Data-Intensive</h3>
        </Container>
      </CdiseContainer>
    );
  }
}

export default Cdise;
