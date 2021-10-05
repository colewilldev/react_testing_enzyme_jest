import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/test.utils';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factor function to create a shallow wrapper for the congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

describe('tests for the congrats component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('renders without an error', () => {
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toEqual(1);
  });
  test('renders no text when `success` prop is false', () => {
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });
  test('renders non-empty congrats message when success prop is true', () => {
    wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'component-message');
    expect(message.text().length).not.toBe(0);
  });
});
