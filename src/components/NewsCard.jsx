import React from "react";

const NewsCard = () => {
  return (
    <>
      <div>
        <h2>
          {props.newstitle}
        </h2>
        <img
        src={required(`../images/news-${props.image}.png`)}
        alt={props.alt}
        >
        </img>
        <p>
          {props.newstext}
        </p>
      </div>
    </>
  );
};

export default NewsCard;
