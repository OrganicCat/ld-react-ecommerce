import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { loadPetDetail } from '../utils/marketService'


let Header = (props, morestuff, whoknows, evenmore, teststack) => {

    return (
        <div className="App-header">
            <img src={logo} onClick={props.onClick} className="App-logo" alt="logo" />
            <h2>Welcome to the Pet Loader</h2>
        </div>
    )
}

const mapStateToProps = (store) => {
  return {
    pets: store.pets
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    onClick: () => {
        loadPetDetail([1,4,5])
            .then((response) => {
                console.log(response)
                dispatch({
                    type: 'ADD_PETS',
                    pets: response
                })
            });
        
    }
  }
}

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export { Header }