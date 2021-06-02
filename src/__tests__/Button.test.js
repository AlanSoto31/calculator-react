import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Button from '../components/Button';

describe('<Button/>', () => {
  let component;
  const mockHandler = jest.fn();

  beforeEach(() => {
    component = render(
      <Button name="x" clickHandler2={mockHandler} color="orange" wide={false} />,
    );
  });

  test('Renders content', () => {
    component.getByText('x');
  });

  test('Click calls a function', () => {
    const button = component.getByText('x');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('Changes its width value relay on wide value', () => {
    const component2 = render(<Button name="+" clickHandler2={mockHandler} color="orange" wide />);
    const button = component.getByText('x');
    const button2 = component2.getByText('+');
    expect(button).toHaveStyle('width: 25%');
    expect(button2).toHaveStyle('width: 50%');
  });
});
