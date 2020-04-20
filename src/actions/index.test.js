import { correctGuess, actionTypes } from './';

describe('Correct guess', () => {
    test('returns an action with type "CORRECT_GUESS"', () => {
        const action = correctGuess();
        expect(action).toEqual({ 
            type: actionTypes.CORRECT_GUESS 
        });
    })
});