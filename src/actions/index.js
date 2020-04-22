export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
};

/**
 * Returns Redux Think action that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action.
 * @function guessWord
 * @param  {string} guessedWord - The word which has been guessed.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {

    };
};