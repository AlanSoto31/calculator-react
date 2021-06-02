import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Calculator component renders', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
