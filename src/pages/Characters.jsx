import React, { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const Characters = () => {
  return (
    <>
      <h3 className="listado-personajes">LOS PERSONAJES DE VALORANT</h3>
      <CharacterList />
    </>
  );
};

export default Characters;
