import React from "react";

const NewsCard = ({ newsTitle, newsImage, newsText }) => {
  return (
    <>
      <div>
        <h2>{newsTitle}</h2>
        <img className='news-img' src={(`src/assets/images/news/img-${newsImage}.png`)}></img>
        <p>{newsText}</p>
      </div>
    </>
  );
};

export default NewsCard;
