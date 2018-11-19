import React, { Component } from "react";
// import { Icon, Image } from "semantic-ui-react";
import { people } from "../../dbs/db_people";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    & h5 {
      text-decoration: underline;
    }
    /* box-shadow: 0 0 5px 2px rgba(0, 1, 139, 1); */
    opacity: 0.95;
  }
`;

const CardImg = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 5%;
  border: solid lightgray 1px;
  margin: 15px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  }};
`;

class Card extends Component {
  render() {
    const { image, name, description, link } = this.props;
    return (
      <a
        href={link}
        style={{ color: "black", textDecoration: "none" }}
        target="_black"
        rel="noreferrer noopener"
      >
        <CardContainer>
          <CardImg image={image} />
          <div style={{ width: "70%", margin: "20px 0" }}>
            <h5 style={{ margin: "0 0 5px 0" }}>{name}</h5>
            <p
              style={{
                marginRight: "20px",
                fontWeight: "100",
                fontSize: "12px"
              }}
            >
              {description}
            </p>
          </div>
        </CardContainer>
      </a>
    );
  }
}

export default class PeopleScreen extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skoltech CDISE | People</title>
        </Helmet>
        {people.map((p, index) => {
          return (
            <div key={index} style={{ flexBasis: "33.3333%" }}>
              <Card
                image={p.img}
                name={p.name}
                description={p.description}
                position={p.position}
                link={p.link}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
