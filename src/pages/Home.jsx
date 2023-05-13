import React from "react";
import News from "../components/News";
import banner from "../assets/images/banner.png";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <>
      <img src={banner} className="banner" alt="banner de la página" />
      <NewsCard
        newsTitle={'Noticia 1'}
        newsImage='article1'
        newsText={'Texto noticia 1'}
      />
      <NewsCard
        newsTitle={'Noticia 2'}
        newsImage='article2'
        newsText={'Texto noticia 2'}
      />
      <NewsCard
        newsTitle={'Noticia 3'}
        newsImage='article3'
        newsText={'Texto noticia 3'}
      />
    </>
  );
};

export default Home;
