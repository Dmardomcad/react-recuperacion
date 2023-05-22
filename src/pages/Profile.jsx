import React, { useEffect } from "react";
import Button from "../components/Button";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Character from "../components/Character";

const Profile = () => {
  const { user, setUser } = UserContext;
  const navigate = useNavigate();
  const logedUserData = JSON.parse(localStorage.getItem("logedUser"));
  const logedUser = logedUserData && logedUserData[0];

  const email = logedUser && logedUserData[0].email;
  const favoritedKey = `favorites_from_${email}`;

  const favoritedCharacters = JSON.parse(localStorage.getItem(favoritedKey))
    ? JSON.parse(localStorage.getItem(favoritedKey))
    : [];
  console.log(favoritedCharacters);

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
              <div>
                <section className="personajes">
                  {favoritedCharacters != null ? (
                    favoritedCharacters.map((favoriteCharacter) => (
                      <article
                        key={favoriteCharacter.uuid}
                        className="personaje"
                      >
                        <Character
                          key={favoriteCharacter.uuid}
                          uuid={favoriteCharacter.uuid}
                          fullPortrait={favoriteCharacter.fullPortrait}
                          displayName={favoriteCharacter.displayName}
                          displayIcon={favoriteCharacter.role.displayIcon}
                        />
                      </article>
                    ))
                  ) : (
                    <div>
                      <Spinner />
                    </div>
                  )}
                </section>
              </div>
            </div>
          </ul>
        </article>
      </section>
      <Button text="logout" />
    </>
  );
};

export default Profile;
