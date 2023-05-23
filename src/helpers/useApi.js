export const fetchCharacters = async url =>{
    const response = await  fetch(url)
    const responseJSON = await response.json()
    return responseJSON.data
}

export default fetchCharacters