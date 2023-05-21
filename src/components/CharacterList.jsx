import React, { useContext } from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";
import Character from "./Character";
import { UserContext } from "../context/UserContext";

const CharacterList = () => {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  const initialState = JSON.parse(localStorage.getItem('favorites')) || []

  const { user, setUser } = useContext(UserContext)
  const [characters, setCharacters] = useState([]);
  const [buscarCharacters, setBuscarCharacters] = useState([])
  const [ favorites, setFavorites ] = useState([])
  
  let activeUser = ''
  if(user === true ) {
    const logedUser = JSON.parse(localStorage.getItem('logedUser'))
    const email = logedUser[0].email
    activeUser = `favorites_from_${email}`
  }
  const userFavorites = localStorage.getItem(activeUser)
   ? JSON.parse(localStorage.getItem(activeUser))
   : []

  //updateLocalStorage(favorites)

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

  const updateLocalStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }


  const handleFav = (e, uuid, character) => {
    e.preventDefault()
    console.log(`guardando en favoritos personaje con id ${uuid}`)
  const updatedFavorites = [...userFavorites, character];
  setFavorites(updatedFavorites);
  localStorage.setItem(activeUser, JSON.stringify(updatedFavorites));
  }
  console.log(favorites)


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

      <section className="personajes">
        {characters != null ? (
          characters.map((character) => (
            <article key={character.uuid} className="personaje">
                <Character
                  key={character.uuid}
                  uuid={character.uuid}
                  fullPortrait={character.fullPortrait}
                  displayName={character.displayName}
                  displayIcon={character.role.displayIcon}
                />
                <button onClick={(e) => handleFav(e, character.uuid, character)}>Añadir a favoritos</button>
            </article>
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
