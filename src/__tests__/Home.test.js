import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Home component renders', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
