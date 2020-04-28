import { actionTypes } from '../actions';

/**
 * @method resetGameReducer
 * @param {boolean} state - Array of guessed words.
 * @param {object} action - Action to be reduced.
 * @returns {boolean} - New success sate.
 */
export default (state = true, action) => {
    switch(action.type) {
        case(actionTypes.RESET_GAME):
            return action.payload;
        default:
            return state;
    }
}