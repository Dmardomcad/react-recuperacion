import React from "react";

const Character = ({ fullPortrait, displayName, displayIcon }) => {
  return (
    <>
      <img src={fullPortrait} alt={displayName} className="personaje-img" />
      <img src={displayIcon} />
      <h4>{displayName}</h4>
    </>
  );
};

export default Character;
