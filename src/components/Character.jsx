import React from "react";

const Character = ({ fullPortrait, displayName, displayIcon }) => {
  return (
    <article>
      <img src={fullPortrait} alt={displayName} className="personaje-img" />
      <img src={displayIcon} />
      <h4>{displayName}</h4>

      {console.log(displayIcon)}
    </article>
  );
};

export default Character;
