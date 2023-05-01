import React,{useEffect, useState} from 'react'
import { fetchCharacters } from '../helpers/useApi'
import CharacterList from '../components/CharacterList'



const Characters = () => {
  
  
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    fetchCharacters(setCharacters)
  },[])

  console.log(characters.data)

  return (
    <>
      <h3 className='listado-personajes'>LOS PERSONAJES DE VALORANT</h3>
      <CharacterList/>
    </>
  )
}

export default Characters