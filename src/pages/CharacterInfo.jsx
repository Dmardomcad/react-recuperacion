import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCharacters from "../helpers/useApi";

const CharacterInfo = () => {
  const { uuid, displayName } = useParams();

  let url = `https://valorant-api.com/v1/agents/${uuid}`;

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    try {
      fetchCharacters(url).then((response) => {
        setCharacter(response);
      });
    } catch (error) {
      console.log("Error");
    }
  }, []);

  return (
    <>
      <h2 className="character-displayname">{character.displayName}</h2>
      <section className="info-personaje">
        <img
          className="info-personaje-img"
          src={character.fullPortrait}
          alt="portrait"
        />
        <article className="historia-personaje">
          <h3> Description:</h3>
          <p> {character.description} </p>
        </article>
      </section>
    </>
  );
};

export default CharacterInfo;
