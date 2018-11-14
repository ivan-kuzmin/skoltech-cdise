import React, { Component } from "react";
import { news } from "../../dbs/db_news";
import Search from "./search";
import { Helmet } from "react-helmet";

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
        {news.map((a, index) => {
          return (
            <div key={index} style={{ flexBasis: "100%", padding: "30px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{a.content.title}</h5>
                <span>{a.content.date}</span>
              </div>
              <div>
                <p>{a.content.text}</p>
              </div>
              <div
                style={{ marginTop: "10px", borderBottom: "1px solid black" }}
              />
              <div style={{}}>
                {a.content.hashtags.map((hast, i) => {
                  return <span key={i}>#{hast} </span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
