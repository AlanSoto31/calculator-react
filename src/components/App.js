import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const data1 = {
  total: '0.5',
  next: '5.5',
  operation: null,
};

function App() {
  const dataResult = calculate(data1, '+');
  return (
    <>
      <ButtonPanel />
      <Display result={dataResult.total} />
    </>
  );
}

App.defaultProps = { result: '0' };

export default App;
