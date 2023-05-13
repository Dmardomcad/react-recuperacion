import React, { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const Characters = () => {
  const [search, setSearch] = useState("");

  const [filter, setFilters] = useState("");
  //console.log(characters.data);

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search character by name"
        className="searchbar"
        value={search}
        onChange={handleChange}
        autoFocus
      ></input>

      <select name="roles" id="roles">
        <option value="Initiator">Initiator</option>
        <option value="Otra">Otra</option>
      </select>

      <h3 className="listado-personajes">LOS PERSONAJES DE VALORANT</h3>
      <CharacterList/>
    </>
  );
};

export default Characters;
