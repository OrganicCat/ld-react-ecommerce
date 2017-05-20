const pet = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PETS':
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
        case 'ADD_PETS':
            return [
                ...state,
                pet(undefined, action)
            ]
        default:
            return state
    }
}

export default pets