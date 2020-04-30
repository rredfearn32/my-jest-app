import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import Input from './Input';
import languageContext from './contexts/languageContext';

/**
 * Setup function for Input component
 * @param {String} testValues
 * @returns {ReactWrapper} 
 */
const setup = ({ language, secretWord }) => {
    language = language || 'en';
    secretWord = secretWord || 'party';

    return mount(
        <languageContext.Provider value={language}>
            <Input secretWord={secretWord} />
        </languageContext.Provider>
    );
};

test('Input renders without error', () => {
    const wrapper = setup({ });
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

test('Input has a secretWord', () => {
    checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn(), wrapper;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
        
        wrapper = setup({ });
    });
    test('currentGuess state updates upon input box value change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
    test('currentGuess state gets cleared upon submit button click', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        
        const mockEvent = { preventDefault: () => {} }
        submitButton.simulate('click', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalled();
    });
});

describe('languagePicker', () => {
    test('correctly renders submit string in english', () => {
        const wrapper = setup({ language: 'en' });
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.text()).toBe('Submit');
    });
    test('correctly renders submit string in german', () => {
        const wrapper = setup({ language: 'de' });
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.text()).toBe('Einreichen');
    });
})