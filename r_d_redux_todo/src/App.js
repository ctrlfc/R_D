import React, { Component } from 'react';
import { view as Todos } from './todos/index';
import { view as Filter } from './filter/index';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <Todos />
        <Filter />
      </div>
    );
  }
}

export default App;
