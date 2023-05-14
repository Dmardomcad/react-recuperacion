import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchCharacters from '../helpers/useApi'


const CharacterInfo = () => {
  
  const { uuid, displayName } = useParams()

  let url = `https://valorant-api.com/v1/agents/${uuid}`

  const [ character, setCharacter ] = useState({})
  
  console.log(character)
  console.log(character.displayName)

  useEffect(() => {
    try {
      fetchCharacters(url).then((response) => {
        setCharacter(response);
      });
    } catch (error) {
      console.log("Error");
    }
  }, []);
  
  return (
    <>
      <div>CharacterInfo: h</div>
      <div> descripcion: hi</div>
      <div>icono: {character.displayName}</div>
    </>
  )
}

export default CharacterInfo