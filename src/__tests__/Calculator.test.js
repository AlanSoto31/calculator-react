import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';
import renderer from 'react-test-renderer'


test("Calculator component renders", () => {
    const calculator = renderer.create(<Calculator/>).toJSON();
    expect(calculator).toMatchSnapshot();
});
