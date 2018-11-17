import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import BackgroundImg from "../../../assets/images/bg1.jpg";

const CdiseContainer = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  color: white;
  margin-bottom: 0px;
  text-align: center;
`;

const Filter = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 80px 0;
  height: 100%;
  width: 100%;
  text-align: left;
`;

class Cdise extends Component {
  render() {
    return (
      <CdiseContainer>
        <Filter>
          <Container>
            <h1 style={{ margin: '0 0px', fontSize: '40px' }}>Skoltech CDISE</h1>
            <h3 style={{ margin: '0 0px', fontWeight: '100' }}>Center for Computational and Data-Intensive</h3>
          </Container>
        </Filter>
      </CdiseContainer>
    );
  }
}

export default Cdise;
