import React, { Component } from 'react';

import './App.css';
// import { AddButton } from './components/AddButton';
import { Header } from './components/Header'
import { add } from './utils/addHelper'

import { connect } from 'react-redux'


import { loadPetDetail } from './utils/marketService'
import { addPetAction } from './actions/addPetAction'

class App extends Component {
 
  componentDidMount() {
    loadPetDetail([1,4,5])
      .then((response) => {
        
        // this.setState({pets: response})
        // dispatch(addPetAction(response))
      });
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
App = connect()(App)

export default App;
