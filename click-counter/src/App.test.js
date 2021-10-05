import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to creat ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

/**
 * Return ShallowWrapper containg node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without an error', () => {
  const wrapper = setup();
  // console.log(wrapper.debug({ verbose: true }));
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
test('renders the app title', () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, 'counter-title');
  expect(title.length).toBe(1);
});

test('renders a counter display', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, 'count');
  expect(counter.length).toBe(1);
});
test('count starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toEqual('0');
});

describe('Increment', () => {
  test('renders the increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });
  test('clicking it increments the count by one', () => {
    const wrapper = setup();
    //find the button
    const button = findByTestAttr(wrapper, 'increment-button');
    // click the button
    button.simulate('click');
    //find the display
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
    wrapper.unmount();
  });
});

describe('decrement button', () => {
  test('renders the decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });
  test('clicking the decrement button decreases the counter display', () => {
    const wrapper = setup();

    const increment = findByTestAttr(wrapper, 'increment-button');
    increment.simulate('click');

    const decrement = findByTestAttr(wrapper, 'decrement-button');
    decrement.simulate('click');

    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
  test('error displays if decrement is clicked at 0', () => {
    const wrapper = setup();
    // find the button
    const button = findByTestAttr(wrapper, 'decrement-button');

    // click the button
    button.simulate('click');

    // find err message text
    const errorMessage = findByTestAttr(wrapper, 'error-message').text();
    expect(errorMessage).toEqual("Counter Can't go below 0");
  });
});
