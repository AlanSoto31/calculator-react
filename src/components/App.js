import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [values, setValues] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const op = calculate(values, buttonName);
    setValues({
      total: op.total,
      next: op.next,
      operation: op.operation,
    });
  };

  return (
    <>
      <ButtonPanel clickHandler1={(buttonName) => handleClick(buttonName)} />
      <Display result={values.operation ? values.next : values.total} />
    </>
  );
};

export default App;
