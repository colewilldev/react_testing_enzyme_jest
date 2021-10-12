import { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../test/test.utils';

// Enzyme.configure({ adapter: new Adapter() });
const defaultProps = { success: false };
/**
 * Factor function to create a shallow wrapper for the congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  // take the default props first, but if propsare passed in it is overridden
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};
describe('tests for the congrats component', () => {
  test('renders without an error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toEqual(1);
  });
  test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });
  test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'component-message');
    expect(message.text().length).not.toBe(0);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});
