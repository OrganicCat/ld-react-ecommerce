const pet = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PET':
            return {
                id: action.id,
                description: action.description
            }
        default:
            return state
    }
}

const pets = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PET':
            return [
                ...state,
                pet(undefined, action)
            ]
        case 'ADD_PETS':
            return [
                ...state,
                ...action.pets
            ]
        default:
            return state
    }
}

export default pets