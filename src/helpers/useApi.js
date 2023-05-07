//import axios from "axios"
/* export const fetchCharacters = async (state) => {
    const peticion = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true') 
    state(peticion.data)
    //console.log(peticion.data)
} */

export const fetchCharacters = async url =>{
    const response = await  fetch(url)
    const responseJSON = await response.json()
    return responseJSON.data
}

export default fetchCharacters