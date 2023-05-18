import React from "react";
import News from "../components/News";
import banner from "../assets/images/banner.png";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <>
      <img src={banner} className="banner" alt="banner de la página" />
      <section className="articulos">
      <NewsCard
        newsTitle={'¡Nuevo evento disponible!'}
        newsImage='article1'
        newsText={'Llega Halloween y con ello también llega un nuevo evento a los mapas de Apex Legends. ¿A qué estás esperando para jugar con tus amigos y conseguir todas las nuevas recompensas? ¡A jugar!'}
      />
      <NewsCard
        newsTitle={'El pasado de Mirage'}
        newsImage='article2'
        newsText={'El pasado de Mirage está tan nublado como su juicio y su sentido del humor, en esta corta historia podreís saber más sobre el pasado, presente y futuro de esta leyenda.'}
      />
      <NewsCard className='article'
        newsTitle={'Adelanto de Stormfront'}
        newsImage='article3'
        newsText={'Espero que todos esteis preparados para el nuevo mapa que se acerca a Apex Legends, en esta isla vais a encontrar todo tipo de fauna y flora que intentarán acabar con vuestra racha de victorias.'}
      />
      </section>
    </>
  );
};

export default Home;
