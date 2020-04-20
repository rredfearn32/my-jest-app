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
}

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders the component without error', () => {

        });
        test('renders the input box', () => {
            
        });
        test('renders the submit button', () => {

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
