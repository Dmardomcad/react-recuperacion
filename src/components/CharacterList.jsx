import React from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

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
