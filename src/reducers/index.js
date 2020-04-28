import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import resetGame from './resetGameReducer';

export default combineReducers({
    success,
    guessedWords,
    secretWord,
    // resetGame
});
