import React from 'react';
import { connect } from 'react-redux'
import { Pet } from './Pet'

let BodyComponent = (props) => {

    let petArray = ""

    if (props.pets.length > 0) {
        petArray =  props.pets.map((item, index) => <Pet {...item} handleAdd={props.handleAdd} key={index} /> )
    }

    return (
        <div>
            {petArray}
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