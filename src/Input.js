import React from 'react';
import PropTypes from 'prop-types';

import successContext from './contexts/successContext';
import languageContext from './contexts/languageContext';
import stringsModule from './helpers/strings';

const Input = ({ secretWord }) => {
    const language = React.useContext(languageContext);
    const [ success, setSuccess ] = successContext.useSuccess();
    const [ currentGuess, setCurrentGuess ] = React.useState('');
    const submitGuess = (ev) => {
        ev.preventDefault();
        setCurrentGuess('');
    };

    return (
        success 
            ?
        null
            :
        <div data-test="component-input">
            <form 
                className="form-inline"
                onSubmit={(ev) => submitGuess(ev)}>
                <input
                    data-test="input-box"
                    className="mb-2 mr-sm-3"
                    type="text"
                    placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
                    value={currentGuess}
                    onChange={(ev) => setCurrentGuess(ev.target.value)} />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={(ev) => submitGuess(ev)}>
                    {stringsModule.getStringByLanguage(language, 'submit')}
                </button>
            </form>
        </div>
    );
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;