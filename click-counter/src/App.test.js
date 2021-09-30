import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without an error', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug({ verbose: true }));
  const appComponent = wrapper.find("[data-test='component-app']");
  console.log(appComponent);
  expect(appComponent.length).toBe(1);
});
test('renders an increment button', () => {});
test('renders a counter display', () => {});
