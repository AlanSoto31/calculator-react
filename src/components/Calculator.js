import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// import Navbar from './Navbar';
import calculate from '../logic/calculate';
import '../CSS/styles.css';

const Calculator = () => {
  const [values, setValues] = useState({
    total: '0',
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
      <div className="calc-cont">
        <Display result={values.operation ? values.next : values.total} />
        <ButtonPanel clickHandler1={(buttonName) => handleClick(buttonName)} />
      </div>
    </>
  );
};

Calculator.defaultProps = { result: '0' };

export default Calculator;
