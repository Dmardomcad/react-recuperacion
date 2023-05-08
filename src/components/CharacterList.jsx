import React from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Character from "./Character";

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
          characters.map((character) => (
            <div key={character.uuid}>
              <Link to={`/characters/${character.displayName}`}>
                <Character
                  key={character.uuid}
                  fullPortrait={character.fullPortrait}
                  displayName={character.displayName}
                />
              </Link>
            </div>
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
