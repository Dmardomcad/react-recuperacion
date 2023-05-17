import React from "react";
import Button from "../components/Button";

const Profile = () => {

  let myusername = (localStorage.getItem('username'))
  let userEmail = (localStorage.getItem('email'))

  const handleLogout = () =>{
    localStorage.clear()
  }

  console.log(localStorage.getItem('username'))

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
              <p>Edad: 33</p>
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
      <Button text='logout' onClick = {handleLogout()}/>
    </>
  );
};

export default Profile;
