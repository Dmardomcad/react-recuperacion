import React, { useEffect } from "react";
import Button from "../components/Button";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const { user, setUser} = UserContext
  const navigate = useNavigate()
  
  let myusername = (localStorage.getItem('username'))
  let userEmail = (localStorage.getItem('email'))
  let mobile = (localStorage.getItem('mobile'))

  console.log(localStorage.getItem('username'))

  useEffect(() =>{
    if(!user) {
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
              <p>Nickname: {myusername}</p>
            </li>
            <li>
              <p>Email: {userEmail}</p>
            </li>
            <li>
              <p>Teléfono: {mobile}</p>
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
