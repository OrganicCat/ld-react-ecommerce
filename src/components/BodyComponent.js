import React from 'react';
import { connect } from 'react-redux'
import { Pet } from './Pet'

const BodyComponent = (props) => {

    let petArray = ""

    if (props.pets.length > 0) {
        petArray =  props.pets.map((item, index) => <Pet {...item} key={index} /> )
    }

    return (
        <div>
            {petArray}
            Cats
        </div>
    )
}

const mapStateToProps = (store) => {
  return {
    pets: store.pets
  }
}

BodyComponent = connect(
  mapStateToProps,
  null
)(BodyComponent)

export { BodyComponent }