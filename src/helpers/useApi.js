import axios from "axios"

export const fetchCharacters = async (state) => {
    const peticion = await axios.get('https://valorant-api.com/v1/agents?=isPlayableCharacter=true') 
    state(peticion.data)
    console.log(peticion.data)
}

export default fetchCharacters