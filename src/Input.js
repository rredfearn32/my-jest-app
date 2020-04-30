import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
    // useState is not destructured so that we can mock it later
    const [ currentGuess, setCurrentGuess ] = React.useState('');
    const submitGuess = (ev) => {
        ev.preventDefault();
        setCurrentGuess('');
    };

    return (
    <div data-test="component-input">
        <form 
            className="form-inline"
            onSubmit={(ev) => submitGuess(ev)}>
            <input
                data-test="input-box"
                className="mb-2 mr-sm-3"
                type="text"
                placeholder="Enter guess"
                value={currentGuess}
                onChange={(ev) => setCurrentGuess(ev.target.value)} />
            <button
                data-test="submit-button"
                className="btn btn-primary mb-2"
                onClick={(ev) => submitGuess(ev)}>
                Submit
            </button>
        </form>
    </div>
    );
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;