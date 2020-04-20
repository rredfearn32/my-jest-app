import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * @function setup
 * @param {object} initialState - initial state for this setup.
 * @return {ShallowWrapper};
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders the component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('renders the input box', () => {
            const inputbox = findByTestAttr(wrapper, "input-box");
            expect(inputbox.length).toBe(1);
        });
        test('renders the submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        test('does not renders the component without error', () => {

        });
        test('does not renders the input box', () => {
            
        });
        test('does not renders the submit button', () => {

        });
    });
});

describe('updating state', () => {

});
