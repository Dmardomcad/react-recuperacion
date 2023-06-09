import React from "react";

const NewsCard = ({ newsTitle, newsImage, newsText }) => {
  return (
    <>
      <article className="article">
        <h2>{newsTitle}</h2>
        <img
          className="news-img"
          src={`/img${newsImage}.png`}
        ></img>
        <p>{newsText}</p>
      </article>
    </>
  );
};

export default NewsCard;
