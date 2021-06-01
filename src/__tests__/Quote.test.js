import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';
import renderer from 'react-test-renderer'


test("Quote component renders", () => {
    const quote = renderer.create(<Quote/>).toJSON();
    expect(quote).toMatchSnapshot();
});