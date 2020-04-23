import React from 'react';
import PropTypes, { string } from 'prop-types';
import { render } from 'enzyme';

const TotalGuesses = (props) => {
    return (
        props.guessCount > 0 
            ?
        <div data-test="total-guesses">
            Total guesses: <span data-test="total-guess-count">{ props.guessCount }</span>
        </div>
            :
        null
    );
};

TotalGuesses.propTypes = {
    guessCount: PropTypes.number
};

export default TotalGuesses;