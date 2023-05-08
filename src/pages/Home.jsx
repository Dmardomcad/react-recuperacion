import React from "react";
import News from "../components/News";
import banner from "../assets/images/banner.png";
import NewsCard from "../components/NewsCard";

const Home = (props) => {
  return (
    <>
      <img src={banner} className="banner" alt="banner de la página" />
      <News />
    </>
  );
};

export default Home;
