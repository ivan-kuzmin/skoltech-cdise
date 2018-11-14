import React, { Component } from "react";
import { Icon, Image } from "semantic-ui-react";
import { people } from "../../dbs/db_people";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardImg = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin: 10px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  }};
`;

class Card extends Component {
  state = {
    hovered: false
  };

  onToggle = () => {
    console.log(this.state.hovered);
    this.setState({
      hovered: !this.state.hovered
    });
  };
  render() {
    const { image, name, description, position, link } = this.props;
    return (
      <a href={link} style={{ color: "black", textDecoration: "none" }}>
        <CardContainer
          onMouseEnter={this.onToggle}
          onMouseLeave={this.onToggle}
        >
          <CardImg
            image={image}
            hovered={this.state.hovered}
            style={{
              boxShadow: this.state.hovered
                ? "0 0 5px 2px rgba(171, 192, 53, 1)"
                : "none"
            }}
          />
          <div style={{ width: "70%", margin: "10px 0" }}>
            <h5>{name}</h5>
            <p style={{ marginRight: "20px" }}>{description}</p>
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
            <div style={{ flexBasis: "33.3333%" }}>
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
