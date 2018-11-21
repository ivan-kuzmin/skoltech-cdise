import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";
import { news } from "../../dbs/db_news";

const New = ({ title, date, images, text, tags, ...rest }) => {
  return (
    <div style={{ height: "100%", border: "none" }} fluid>
      <div>
        <h2>{title}</h2>
        <div
          style={{
            background: "rgba(0,0,0,0.05)",
            height: "1px",
            margin: "0.5em -1em 1em"
          }}
        />
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          dynamicHeight={true}
        >
          {images.map(src => {
            return (
              <div>
                <img src={src} alt="not found" />
              </div>
            );
          })}
        </Carousel>
        <div>{text}</div>
      </div>
      <div extra style={{ padding: "0.5em 1em" }}>
        <div
          style={{
            background: "rgba(0,0,0,0.05)",
            height: "1px",
            margin: "0.5em -1em 1em"
          }}
        />
        <Grid>
          <Grid.Row>
            <Grid.Column style={{ textAlign: "left" }} width={10}>
              {tags.map(tag => "#" + tag + " ")}
            </Grid.Column>
            <Grid.Column style={{ textAlign: "right" }} width={6}>
              {date}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

class NewsPage extends Component {
  render() {
    const path = window.location.pathname;
    const id = path.slice(path.lastIndexOf("/") + 1, path.length); //get it from Route by props???
    const current_news = news.filter(n => n.id === id)[0];
    return (
      <div>
        <New
          title={current_news.content.title}
          date={current_news.content.date}
          images={current_news.content.images}
          text={current_news.content.text}
          tags={current_news.content.tags}
        />
      </div>
    );
  }
}
export default NewsPage;
