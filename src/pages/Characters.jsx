import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../helpers/useApi";
import CharacterList from "../components/CharacterList";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchCharacters(setCharacters);
  }, []);

  //console.log(characters.data);

  return (
    <>
      <input type="text"
      placeholder="Search.."
      className="searchbar"
      autoFocus
      ></input>
      <h3 className="listado-personajes">LOS PERSONAJES DE VALORANT</h3>
      <CharacterList />
    </>
  );
};

export default Characters;
