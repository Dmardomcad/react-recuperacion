import React,{useEffect, useState} from 'react'
import { fetchCharacters } from '../helpers/useApi'



const Characters = () => {
  
  
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    fetchCharacters(setCharacters)
  },[])

  console.log(characters.data)

  return (
    <>
      Characters
      {characters.data != null ? (
        characters.data.map(characters => (
          <div key={characters.uuid}>
            <a href="#">{characters.displayName}</a>
            <img src={characters.fullPortrait} alt="imagen ..." />
          </div>
        ))
      )
        : 
        <div>
            <h2>no characters found...</h2>
        </div>
          
      }
    </>
  )
}

export default Characters