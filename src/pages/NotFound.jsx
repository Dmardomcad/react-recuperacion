import React from "react";

const NotFound = () => {
  return (
    <>
      <h1>ERROR 404</h1>
      <h4>
        Parece que no hay nada por aquí...
        <a href="index.html">volver al inicio</a>
      </h4>
      <div class="cargando">
        <div class="carga"></div>
        <div class="carga"></div>
        <div class="carga"></div>
      </div>
    </>
  );
};

export default NotFound;
