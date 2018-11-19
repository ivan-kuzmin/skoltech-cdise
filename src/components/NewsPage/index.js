import React, { Component } from "react";
import { news } from "../../dbs/db_news";

import ImageGallery from "react-image-gallery";

const New = ({ title, date, images, text, hashtags, ...rest }) => {
  const items = images.map(img => {
    return {
      original: img,
      thumbnail: img
    };
  });
  return (
    <div style={{ flexBasis: "100%", padding: "30px 0" }} {...rest}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>{title}</h5>
        <span>{date}</span>
      </div>
      <ImageGallery items={items} />
      <div>
        <p>{text}</p>
      </div>
      <div style={{ marginTop: "10px", borderBottom: "1px solid black" }} />
      <div style={{}}>
        {hashtags.map((hast, i) => {
          return <span key={i}>#{hast} </span>;
        })}
      </div>
    </div>
  );
};

class NewsPage extends Component {
  render() {
    const path = window.location.pathname;
    const id = path.slice(path.lastIndexOf("/") + 1, path.length); //get it from Route by props???
    const current_news = news.filter(n => parseInt(n.id) == parseInt(id))[0];
    return (
      <div>
        <New
          title={current_news.title}
          date={current_news.date}
          images={current_news.images}
          text={current_news.text}
          hashtags={current_news.hashtags}
        />
      </div>
    );
  }
}

export default NewsPage;
