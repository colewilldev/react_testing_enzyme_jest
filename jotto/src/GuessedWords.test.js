import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/test.utils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factor function to create a shallow wrapper for the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  // take new props and lay them over
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};
test('expect the first test not to fail', () => {
  checkProps(GuessedWords, defaultProps);
});
describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
    console.log(wrapper.debug());
  });
  test('renders without an error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  // test('renders instructions to guess a word', () => {
  //   const instructions = findByTestAttr(wrapper, 'guess-instructions');
  //   console.log(instructions.text());
  //   expect(instructions.text().length).not.toBe(0);
  // });
});
describe('if there are word guessed', () => {});
