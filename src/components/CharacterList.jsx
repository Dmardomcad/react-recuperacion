import React from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Character from "./Character";

const CharacterList = () => {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  const [characters, setCharacters] = useState([]);
  const [buscarCharacters, setBuscarCharacters] = useState([])

  useEffect(() => {
    try {
      fetchCharacters(url).then((response) => {
        setCharacters(response);
        setBuscarCharacters(response)
      });
    } catch (error) {
      console.log("Error");
    }
  }, []);
  //console.log(characters)
  const [search, setSearch] = useState("");
  //console.log(characters.data);
  
  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = (searchTerm) => {
    let searchResult = buscarCharacters.filter((element) => {
      if(element.displayName.toString().toLowerCase().includes(searchTerm.toLowerCase())) 
      return element
    })
    setCharacters(searchResult)
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
      <button className="searchbar">O</button>

      <select name="roles" id="roles">
        <option value="Initiator">Initiator</option>
        <option value="Otra">Otra</option>
      </select>


      <section className="personajes">
        {characters != null ? (
          characters.map((character) => (
            <div key={character.uuid}>
              <Link to={`/characters/${character.uuid}`}>
                <Character
                  key={character.uuid}
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
