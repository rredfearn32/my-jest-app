import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions'; 

export class UnconnectedInput extends Component {
    /**
     * @method constructor
     * @param {object} props - Component props
     * @returns {undefined}
     */
    constructor(props) {
        super(props);

        // initialize state
        this.state = { currentGuess: '' };

        // bind this for submitGuessedWord
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }

    submitGuessedWord(ev) {
        ev.preventDefault();
        const guessedWord = this.state.currentGuess;

        if(guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord);
            this.setState({ currentGuess: '' });
        }
    }
    
    render() {
        const contents = this.props.success
        ? null
        : (
          <form className="form-inline">
              <input
                data-test="input-box"
                className="mb-2 mr-sm-3"
                type="text"
                placeholder="Enter guess..."
                value={this.state.currentGuess}
                onChange={(ev) => this.setState({ currentGuess: ev.target.value })} />
              <button
                data-test="submit-button"
                type="submit"
                className="btn btn-primary"
                onClick={(ev) => this.submitGuessedWord(ev)}>
                  Submit
              </button>
          </form>  
        );

        return(
            <div data-test="component-input">
                {contents}
            </div>
        ) ;
    }
};

const mapStateToProps = ({ success }) => {
    return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);