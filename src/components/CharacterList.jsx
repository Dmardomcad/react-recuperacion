import React from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(setCharacters);
  }, []);

  return (
    <>
      <section className="personajes">
        {characters.data != null ? (
          characters.data.map((characters) => (
            <article key={characters.uuid} className="personaje">
              <img
                src={characters.fullPortrait}
                alt="imagen ..."
                className="personaje-img"
              />
              <h4>{characters.displayName}</h4>
            </article>
          ))
        ) : (
          <div>
            <Spinner/>
          </div>
        )}
      </section>
    </>
  );
};

export default CharacterList;
