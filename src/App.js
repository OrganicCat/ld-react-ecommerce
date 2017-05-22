import React, { Component } from 'react';

import './App.css';
// import { AddButton } from './components/AddButton';
import { Header } from './components/Header'
import { add } from './utils/addHelper'

import { connect } from 'react-redux'

import { BodyComponent } from './components/BodyComponent'

import { addPetAction } from './actions/addPetAction'

class App extends Component {
 
  componentDidMount() {
    
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <BodyComponent />
        Click the Spinny React Icon to load Pets
      </div>
    );
  }
}

App = connect()(App)

export default App;
