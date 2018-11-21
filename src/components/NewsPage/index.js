import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { news } from "../../dbs/db_news";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: 'slider',
      autoplay: true,
    };
    return (
      <Slider {...settings}>
        {this.props.images.map(src => {
          return (
            <div>
              <img style={{ maxHeight: '400px', margin: 'auto' }} src={src} alt="not found" />
            </div>
          );
        })}
      </Slider>
    );
  }
}

const New = ({ title, date, images, text, tags, ...rest }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{ height: "100%", border: "none" }} fluid>
      <div>
        <h2>{title}</h2>
        <div
          style={{
            background: "rgba(0,0,0,0.05)",
            height: "1px",
            margin: "0.5em 0em 1em"
          }}
        />
        <SimpleSlider images={images} />
        <div>{text}</div>
      </div>
      <div extra style={{ padding: "1em 0 1em", color: "rgba(0,0,0,0.4)" }}>
        <div
          style={{
            background: "rgba(0,0,0,0.05)",
            height: "1px",
            margin: "0.5em 0em 0.5em",
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
