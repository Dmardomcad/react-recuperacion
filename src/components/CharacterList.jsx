import React from 'react'
import { useState, useEffect } from 'react'
import fetchCharacters from '../helpers/useApi'

const CharacterList = () => {
  const [characters, setCharacters] = useState(null)

  useEffect(()=>{
    fetchCharacters(setCharacters)
  },[])

  return (
    <>
      CharacterList
    </>
  )
}

export default CharacterList