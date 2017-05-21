import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';



let Header = (props, morestuff, whoknows, evenmore, teststack) => {

    console.log("now here", props)
    if (props.pets) {
        console.log("now here2: ", props.pets)
    }    
    

    return (
        <div className="App-header">
            <img src={logo} onClick={props.onClick} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            
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
        dispatch({
            type: 'ADD_PETS',
            pets: [ {
                description: 'fluffy'
            },
            {
                description: 'straight'
            },
            {
                description: 'curly'
            }]
        })
        console.log("this state", state)
    }
  }
}

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export { Header }