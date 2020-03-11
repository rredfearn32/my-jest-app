import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button data-test="increment-button" onClick={ this.increaseCounter.bind(this) }>Increment counter</button>
        <p>Challenges to do:</p>
        <ul>
          <li>Decrement button</li>
          <li>No count below zero + display error if attempted</li>
          <li>Clear error on increment</li>
        </ul>
      </div>
    );
  }
}

export default App;
