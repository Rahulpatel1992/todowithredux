import React, { Component } from 'react';
import './App.css';
import Todo from "./Components/todo";
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
         <Provider store ={store}>
             <Todo />
        </Provider>
    );
  }
}

export default App;
