import React, { useEffect } from "react";
import Button from "../components/Button";
import { UserContext} from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const { user, setUser} = UserContext
  const navigate = useNavigate()
  const logedUserData = JSON.parse(localStorage.getItem('logedUser'))
  const logedUser = logedUserData[0]

  console.log(logedUserData)

  useEffect(() =>{
    if(user === false) {
      navigate('/login')
    }
  }, [user])

  return (
    <>
      <section className="perfil-usuario">
        <h3>PERFIL DE USUARIO</h3>
        <article className="datos-usuario">
          <img src="/src/assets/img/profile-stock.jpg" alt="placeholder"></img>
          <ul>
            <li>
              <p>Nickname: {logedUser.username}</p>
            </li>
            <li>
              <p>Email: {logedUser.email}</p>
            </li>
            <li>
              <p>Teléfono: {logedUser.mobile}</p>
            </li>
            <li>
              <h5>Personajes Favoritos:</h5>
            </li>
            <div>
              Favoritos placeholder
            </div>
          </ul>
        </article>
      </section>
      <Button text='logout'/>
    </>
  );
};

export default Profile;
