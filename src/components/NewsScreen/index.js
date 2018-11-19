import React, { Component } from "react";
import { news } from "../../dbs/db_news";
import { Link } from "react-router-dom";
import Search from "./search";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

class NewsItem extends Component {
  state = {
    isRedirect: false
  };
  render() {
    const { id, title, date, images, text, hashtags } = this.props;
    const isRedirect = this.state;
    return (
      <StyledLink
        to={`/news/${id}`}
        style={{
          flexBasis: "100%",
          padding: "30px 0"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{title}</h5>
          <span>{date}</span>
        </div>
        <div>
          <p>{text}</p>
        </div>
        <div style={{ marginTop: "10px", borderBottom: "1px solid black" }} />
        <div style={{}}>
          {hashtags.map((hast, i) => {
            return <span key={i}>#{hast} </span>;
          })}
        </div>
      </StyledLink>
    );
  }
}

export default class NewsScreen extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skoltech CDISE | News</title>
        </Helmet>
        <Search />
        <div className="newslist">
          {news.map((n, index) => {
            return (
              <NewsItem
                key={index}
                id={n.id}
                title={n.title}
                date={n.date}
                images={n.images}
                text={n.text}
                hashtags={n.hashtags}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
