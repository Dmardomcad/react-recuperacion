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
      <h3 className='listado-personajes'>LOS PERSONAJES DE VALORANT</h3>
        <section className='personajes'>
          {characters.data != null ? (
            characters.data.map(characters => (
              <article key={characters.uuid} className='personaje'>
                <img src={characters.fullPortrait} alt="imagen ..." className='personaje-img' />
                <h4>{characters.displayName}</h4>
              </article>
            ))
          )
            : 
            <div>
                <h2>no characters found...</h2>
            </div>
              
          }
        </section>
    </>
  )
}

export default Characters