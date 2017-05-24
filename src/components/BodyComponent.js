import React from 'react';
import { connect } from 'react-redux'
import { Pet } from './Pet'

let BodyComponent = (props) => {

    let petArray = ""
    let cartArray = ""

    if (props.pets.length > 0) {
        petArray =  props.pets.map((item, index) => <Pet {...item} handleAdd={props.handleAdd} key={index} /> )
    }

    if (props.cart.length > 0) {
        console.log("cart", props.cart)
        cartArray = props.cart.map((item, index) => <div key={index}><b>{item.name}</b></div>)
    }

    return (
        <div>
            <div>
                <u>Cart:</u>
                <div>{cartArray}</div>
            </div>
            <div>
                <u>Pet List</u>
                {petArray}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    console.log(store)
  return {
    pets: store.pets,
    cart: store.cart
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    handleAdd: (pet) => {
        dispatch({
            type: 'CART_ADD',
            item: pet
        })
    }
  }
}

BodyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyComponent)

export { BodyComponent }