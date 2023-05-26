import React, { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Character from "../components/Character";
import FavHeart from "../components/FavHeart";

const Profile = () => {
  const { user, setUser } = UserContext;
  const navigate = useNavigate();
  const logedUserData = JSON.parse(localStorage.getItem("logedUser"));
  const logedUser = logedUserData && logedUserData[0];

  const email = logedUser && logedUserData[0].email;
  const favoritedKey = `favorites_from_${email}`;

  const [favoritedCharacters, setFavoritedCharacters] = useState(
    JSON.parse(localStorage.getItem(favoritedKey))
      ? JSON.parse(localStorage.getItem(favoritedKey))
      : []
  );

  const handleRemoveFavorite = (uuid) => {
    const updatedFavorites = favoritedCharacters.filter(
      (character) => character.uuid !== uuid
    );

    localStorage.setItem(favoritedKey, JSON.stringify(updatedFavorites));
    setFavoritedCharacters(updatedFavorites);
  };

  useEffect(() => {
    if (user === false || !logedUser) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <section className="perfil-usuario">
        <h3>PERFIL DE USUARIO</h3>
        <article className="datos-usuario">
          <ul>
            <li>
              <p>Nickname: {logedUser && logedUser.username}</p>
            </li>
            <li>
              <p>Email: {logedUser && logedUser.email}</p>
            </li>
            <li>
              <p>Teléfono: {logedUser && logedUser.mobile}</p>
            </li>
            <li>
              <h5>Personajes Favoritos:</h5>
            </li>
            <div>
              <section className="personajes">
                {favoritedCharacters != null ? (
                  favoritedCharacters.map((favoriteCharacter) => (
                    <article key={favoriteCharacter.uuid} className="personaje">
                      <Character
                        key={favoriteCharacter.uuid}
                        uuid={favoriteCharacter.uuid}
                        fullPortrait={favoriteCharacter.fullPortrait}
                        displayName={favoriteCharacter.displayName}
                        displayIcon={favoriteCharacter.role.displayIcon}
                      />
                      <button
                        className="btn-like"
                        onClick={() =>
                          handleRemoveFavorite(favoriteCharacter.uuid)
                        }
                      >
                        <FavHeart />
                      </button>
                    </article>
                  ))
                ) : (
                  <div>
                    <Spinner />
                  </div>
                )}
              </section>
            </div>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Profile;
