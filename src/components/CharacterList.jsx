import React from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      fetchCharacters(url).then((response) => {
        setCharacters(response);
      });
    } catch (error) {
      console.log("Error");
    }
  }, []);
  //console.log(characters)

  return (
    <>
      <section className="personajes">
        {characters != null ? (
          characters.map((characters) => (
            <Link to={`/characters/${characters.displayName}`}>
              <article key={characters.displayName} className="personaje">
                <img
                  src={characters.fullPortrait}
                  alt="imagen ..."
                  className="personaje-img"
                />
                <h4>{characters.displayName}</h4>
              </article>
            </Link>
          ))
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </section>
    </>
  );
};

export default CharacterList;
