import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const op = calculate(this.state, buttonName);
    this.setState(() => ({
      total: op.total,
      next: op.next,
      operation: op.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <ButtonPanel clickHandler1={(buttonName) => this.handleClick(buttonName)} />
        <Display result={operation ? next : total} />
      </>
    );
  }
}

export default App;
