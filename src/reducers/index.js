import { combineReducers } from 'redux'
import pets from './pets'
import cart from './cart'

const ldCartApp = combineReducers({
    pets,
    cart
})

export default ldCartApp