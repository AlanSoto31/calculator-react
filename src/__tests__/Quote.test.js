import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Quote component renders', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
