import React, { Component } from "react";
import { news } from "../../dbs/db_news";
import Search from "./search";

// const ImageCard = styled.img`
//   height: 300px;
//   width: 400px;
// `;

// class NewImage extends Component {
//   render() {
//     return <ImageCard src={this.props.image} alt="" />;
//   }
// }
// const NewContainer = styled.div`
//   padding: 10px;
//   border-bottom: 1px solid black;
// `;

// class New extends Component {
//   render() {
//     return (
//       <NewContainer>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center"
//           }}
//         >
//           <div style={{ fontSize: "20px" }}>{this.props.article}</div>
//           <div style={{ textOverflow: "ellipsis" }}>{this.props.date}</div>
//         </div>
//         <NewImage image={this.props.image} />
//         <p>{this.props.text}</p>
//         {this.props.hashtags.map((tag, i) => {
//           return <span key={i}>#{tag} </span>;
//         })}
//       </NewContainer>
//     );
//   }
// }

{
  /* <New
  article={news.content.article}
  date={news.content.date}
  image={news.content.image}
  text={news.content.text}
  hashtags={news.content.hashtags}
/>; */
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
        <Search />
        {news.map((a, index) => {
          return (
            <div
              key={index}
              style={{ flexBasis: "100%", padding: "30px 0" }}
            >
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
