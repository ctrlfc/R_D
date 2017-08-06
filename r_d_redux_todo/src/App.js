import React, { Component } from 'react';
import { view as Todos } from './todos/';
import { view as Filter } from './filter/';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
        <Filter />
      </div>
    );
  }
}

export default App;
