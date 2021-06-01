import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';
import renderer from 'react-test-renderer'


test("Home component renders", () => {
    const home = renderer.create(<Home/>).toJSON();
    expect(home).toMatchSnapshot();
});
