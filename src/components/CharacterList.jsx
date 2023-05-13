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
            <div key={character.displayName}>
              <Link to={`/characters/${character.displayName}`}>
                <Character
                  key={character.displayName}
                  fullPortrait={character.fullPortrait}
                  displayName={character.displayName}
                  displayIcon={character.role.displayIcon}
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
      {/* {console.log(characters[1].displayName)} */}
    </>
  );
};

export default CharacterList;
