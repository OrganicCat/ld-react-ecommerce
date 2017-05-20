import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {add} from './utils/addHelper'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1,2)).toBe(3)
  })
  it('have default value of 0', () => {
    expect(add()).toBe(0)
  })
})