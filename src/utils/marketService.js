const baseUrl = 'https://api.guildwars2.com/v2/pets'

/*
export const loadPets = () => {
    return fetch(baseUrl, {
        method: 'GET',
        mode: 'cors'
        
    }).then(res => res.json())
}
*/

export const loadPetDetail = (petIds) => {
    return fetch(`${baseUrl}?ids=${petIds}`, {
        method: 'GET',
        mode: 'cors'
    }).then(res => res.json())
}