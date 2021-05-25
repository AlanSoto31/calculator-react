import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <>
      <ButtonPanel />
      <Display result="100" />
    </>
  );
}

App.defaultProps = { result: '0' };

export default App;