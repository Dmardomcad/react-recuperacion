import React from "react";

const Character = (character) => {
  return (
    <article>
      <img
        src={character.fullPortrait}
        alt={character.displayName}
        className="personaje-img"
      />
      <h4>{character.displayName}</h4>
    </article>
  );
};

export default Character;
