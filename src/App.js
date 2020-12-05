import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  return (
    <div className="App">
     
     <h1>Reducer Todo</h1>
     
     <TodoList />

    </div>
  );
}

export default App;