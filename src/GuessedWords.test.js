import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3 }
    ]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWord component.
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5}
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })
    
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNodes.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});

describe('languagePicker', () => {
    test('correctly renders guess instructions string in english by default', () => {
        const wrapper = setup({ guessedWords: [] });
        const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(guessInstructions.text()).toBe('Try to guess the secret word!');
    });
    test('correctly renders guess instructions string in german', () => {
        const mockUseContext = jest.fn()
            .mockReturnValue('de');
        React.useContext = mockUseContext;
        
        const wrapper = setup({ guessedWords: [] });
        const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(guessInstructions.text()).toBe('Versuchen Sie das geheimes Wort erraten!');
    });
});