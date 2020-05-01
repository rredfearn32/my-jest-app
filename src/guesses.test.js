import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import successContext from './contexts/successContext';
import guessedWordsContext from './contexts/guessedWordsContext';

import Input from './Input';
import GuessedWords from './GuessedWords';

const setup = (guessedWordsStrings=[], secretWord='party') => {
    const wrapper = mount(
        <guessedWordsContext.GuessedWordsProvider>
            <successContext.SuccessProvider>
                <Input secretWord={secretWord} />
                <GuessedWords />
            </successContext.SuccessProvider>
        </guessedWordsContext.GuessedWordsProvider>
    );

    const inputBox = findByTestAttr(wrapper, 'input-box');
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    // Pre-populating guessed words by simulating word guess
    guessedWordsStrings.forEach((word) => {
        const mockEvent = { target: { value: word } };
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
    });
    return [wrapper, inputBox, submitButton];
};

describe('test word guesses', () => {
    let wrapper, inputBox, submitButton;

    describe('non-empty guessed words', () => {
        beforeEach(() => {
            [ wrapper, inputBox, submitButton ] = setup(['agile'], 'party');
        });
        describe('correct guess', () => {
            beforeEach(() => {
                const mockEvent = { target: { value: 'party' } };
                inputBox.simulate('change', mockEvent);
                submitButton.simulate('click');
            });
            test('Input component contains no children', () => {
                const inputComponent = findByTestAttr(wrapper, 'component-input');
                expect(inputComponent.children().length).toBe(0);
            });
            test('GuessedWords table row count reflects updated guess', () => {
                const rows = findByTestAttr(wrapper, 'guessed-word');
                expect(rows.length).toBe(2);
            });
        });
        describe('incorrect guess', () => {
            beforeEach(() => {
                const mockEvent = { target: { value: 'train' } };
                inputBox.simulate('change', mockEvent);
                submitButton.simulate('click');
            });
            test('Input component remains', () => {
                expect(inputBox.exists()).toBe(true);
            });
            test('GuessedWords table row count reflects updated guess', () => {
                const rows = findByTestAttr(wrapper, 'guessed-word');
                expect(rows.length).toBe(2);
            });
        });
    });

    describe('empty guessedWords', () => {
        beforeEach(() => {
            [ wrapper, inputBox, submitButton ] = setup([], 'party');
        });
        test('guessedWords shows guessed word after incorrect guess', () => {
            const mockEvent = { target: { value: 'train' } };
            inputBox.simulate('change', mockEvent);
            submitButton.simulate('click');
            const rows = findByTestAttr(wrapper, 'guessed-word');
            expect(rows.length).toBe(1);
        });
    });
});