import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store  = storeFactory(initialState);
        })
        test('updates correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates correctly for successful guess', () => {

        });
    });
    describe('some guessed words', () => {
        test('updates correctly for unsuccessful guess', () => {

        });
        test('updates correctly for successful guess', () => {

        });
    });
});