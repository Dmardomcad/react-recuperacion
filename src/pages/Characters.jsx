import React, { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const Characters = () => {
  const [search, setSearch] = useState('')

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
