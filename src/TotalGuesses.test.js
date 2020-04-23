import React from 'react';
import { findByTestAttr, checkProps } from '../test/testUtils';
import { shallow, ShallowWrapper } from 'enzyme';

import TotalGuesses from './TotalGuesses';

const defaultProps = {
    guessCount: 0
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWord component.
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<TotalGuesses {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    checkProps(TotalGuesses, defaultProps);
});

describe('when no words have been guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });
    test('the TotalGuesses component should not render', () => {
        const component = findByTestAttr(wrapper, 'total-guesses');
        expect(component.length).toBe(0);
    });
});

describe('when no words have been guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessCount: 2 });
    });
    test('the TotalGuesses component should render', () => {
        const component = findByTestAttr(wrapper, 'total-guesses');
        expect(component.length).toBe(1);
    });
    test('the TotalGuesses component should contain the guess count', () => {
        const component = findByTestAttr(wrapper, 'total-guess-count');
        console.log(component);
        expect(component.text()).toBe("2");
    });
});