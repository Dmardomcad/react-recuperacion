import React from "react";

const Profile = () => {
  return (
    <>
      <section className="perfil-usuario">
        <h3>PERFIL DE USUARIO</h3>
        <article className="datos-usuario">
          <img src="/src/assets/img/profile-stock.jpg" alt="placeholder"></img>
          <ul>
            <li>
              <p>Nickname: Pepeviyuela32</p>
            </li>
            <li>
              <p>Género: Masculino</p>
            </li>
            <li>
              <p>Edad: 33</p>
            </li>
            <li>
              <h5>Datos de interés:</h5>
            </li>
            <li>
              <p>
                Hola, me llamo Pepe, me gusta el surf, los videojuegos y pasarme
                las tardes programando.
              </p>
            </li>
            <li>
              <div>
                favoritos
              </div>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Profile;
