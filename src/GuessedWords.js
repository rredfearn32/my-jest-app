import React from 'react';
import PropTypes, { string } from 'prop-types';

import TotalGuesses from './TotalGuesses';

const GuessedWords = (props) => {
    let contents;
    if(props.guessedWords.length === 0){
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => {
            return (
                <tr key={index} data-test="guessed-word">
                    <td>{ index + 1 }</td>
                    <td>{ word.guessedWord }</td> 
                    <td>{ word.letterMatchCount }</td> 
                </tr>
            );
        });
        contents = (
            <div data-test="guessed-words">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h3>Guessed words</h3>
                    <TotalGuesses guessCount={props.guessedWords.length} />
                </div>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Guess</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        );
    }
    
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    )
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;