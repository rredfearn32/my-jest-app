import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Reset, { UnconnectedReset } from './Reset';

/**
 * @function setup
 * @param {object} initialState - initial state for this setup.
 * @return {ShallowWrapper};
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Reset store={store} />).dive().dive();
    return wrapper;
};

describe('render', () => {
    describe('when the word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('the reset control does not render', () => {
            const component = findByTestAttr(wrapper, 'reset-control');
            expect(component.length).toBe(0);
        });
    });
    describe('when the word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test('the reset control renders', () => {
            const component = findByTestAttr(wrapper, 'reset-control');
            expect(component.length).toBe(1);
        });
    });
});

describe('redux props', () => {
   test('has success piece of state', () => {
       const success = true;
       const wrapper = setup({ success });
       const successProp = wrapper.instance().props.success;
       expect(successProp).toBe(success);
   });
   test('"resetGame" action creator is a Function prop', () => {
       const wrapper = setup();
       const resetGameProp = wrapper.instance().props.resetGame;
       expect(resetGameProp).toBeInstanceOf(Function);
   });
});

describe('"resetGame" action creator', () => {
    let resetGameMock;
    let wrapper;

    beforeEach(() => {
        resetGameMock = jest.fn();
        const props = {
            resetGame: resetGameMock,
            success: true
        };

        wrapper = shallow(<UnconnectedReset {...props} />);
        const resetButton = findByTestAttr(wrapper, 'reset-button');
        resetButton.simulate('click', { preventDefault(){} });
    });
    test('calls "resetGame" when button is clicked', () => {
        const resetGameCallCount = resetGameMock.mock.calls.length;
        expect(resetGameCallCount).toBe(1);
    });
});