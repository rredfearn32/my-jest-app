import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import Reset from './Reset';
import { getSecretWord } from './actions';

export class UnconnectedApp extends Component {
  
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // Get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <p>The secret word is {this.props.secretWord}</p>
        <Congrats success={this.props.success} />
        <Reset />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <p>
          <strong>TODO: </strong>
          <a href="https://github.com/flyrightsister/udemy-react-testing-projects/blob/master/jotto-redux/README.md">Challenges</a> complete: 1/5
          </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
