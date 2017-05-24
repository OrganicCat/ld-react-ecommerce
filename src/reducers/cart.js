const cart = (state = {}, action) => {
    switch (action.type) {
        case 'CART_ADD':
            return [
                ...state,
                action.item
            ]
        default:
            return state
    }
}

export default cart