import React, { useContext } from "react";
import { useState, useEffect } from "react";
import fetchCharacters from "../helpers/useApi";
import Spinner from "./Spinner";
import Character from "./Character";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import FavHeart from "./FavHeart";
import NoFavHeart from "./NoFavHeart";

const CharacterList = () => {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  const { user, setUser } = useContext(UserContext);
  const [characters, setCharacters] = useState([]);
  const [buscarCharacters, setBuscarCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  let activeUser = "";
  if (user === true) {
    const logedUser = JSON.parse(localStorage.getItem("logedUser"));
    const email = logedUser[0].email;
    activeUser = `favorites_from_${email}`;
  }

  useEffect(() => {
    fetchCharacters(url).then((response) => {
      setCharacters(response);
      setBuscarCharacters(response);
      const storedFavorites = JSON.parse(localStorage.getItem(activeUser));
      if (storedFavorites) {
        setFavorites(storedFavorites);
      }
    });
  }, []);
  const [search, setSearch] = useState("");

  const handleFav = (e, uuid, character) => {
    if (!user) {
      navigate("/register");
      return;
    }
    e.preventDefault();
    const updatedFavorites = [...favorites];

    const index = updatedFavorites.findIndex(
      (favCharacter) => favCharacter.uuid === uuid
    );

    if (index !== -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push(character);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem(activeUser, JSON.stringify(updatedFavorites));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (searchTerm) => {
    let searchResult = buscarCharacters.filter((element) => {
      if (
        element.displayName
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
        return element;
    });
    setCharacters(searchResult);
  };

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
              <button
                className="btn-like"
                onClick={(e) => handleFav(e, character.uuid, character)}
              >
                {favorites.some(
                  (favCharacter) => favCharacter.uuid === character.uuid
                ) ? (
                  <FavHeart />
                ) : (
                  <NoFavHeart />
                )}
              </button>
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
