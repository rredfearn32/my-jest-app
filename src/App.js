import React, { Component } from 'react';
import './App.css';

class App extends Component {

  minCounterLimit = 0;

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }

  increaseCounter() {
    if(this.state.error) {
      this.setState({
        error: false
      });
    }

    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCounter() {
    const newCounter = this.state.counter - 1;
    
    if(newCounter < this.minCounterLimit) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = <div data-test="error-message">The counter cannot go below zero!</div>;
    }
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button data-test="increment-button" onClick={ this.increaseCounter.bind(this) }>Increment counter</button>
        <button data-test="decrement-button" onClick={ this.decreaseCounter.bind(this) }>Decrement counter</button>
        { errorMessage }
        <p>Challenges to do:</p>
        <ul>
          <li><s>Decrement button</s></li>
          <li><s>No count below zero + display error if attempted</s></li>
          <li><s>Clear error on increment</s></li>
        </ul>
      </div>
    );
  }
}

export default App;
