import React, { Component } from 'react';

import './App.css';
import {AddButton} from './components/AddButton';
import {Header} from './components/Header'
import {add} from './utils/addHelper'
import {loadPets, loadPetDetail} from './utils/marketService'

class App extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    loadPets()
      .then((response) => {
        // Does nothing right now, pulling all indexes for petID maybe in future
        
      })
      .then((response) => {
        return loadPetDetail([1,4,5])
      })
      .then((response) => {
        console.log(response)
        this.setState({pet: response})
      });
  }

  add(petID) {

  }
  

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.pet.description}
        <img src={this.state.pet.icon} alt="Pet {this.state.pet.id}" />
        <p className="App-intro">
          <AddButton add={add} />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
