import React from 'react'
import { useParams } from 'react-router-dom'

const CharacterInfo = () => {
  
  const {displayName} = useParams()
  
  return (
    <>
      <div>CharacterInfo: {displayName}</div>
      {console.log(displayName)}
    </>
  )
}

export default CharacterInfo