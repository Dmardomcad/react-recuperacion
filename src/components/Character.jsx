import React, { useState } from "react";
import { Link } from "react-router-dom";

const Character = ({ uuid, fullPortrait, displayName, displayIcon }) => {
  return (
    <article>
      <Link to={`/characters/${uuid}`}>
        <img src={fullPortrait} alt={displayName} className="personaje-img" />
      </Link>
      <img src={displayIcon} className="personaje-rol" />
      <h4>{displayName}</h4>
    </article>
  );
};

export default Character;
