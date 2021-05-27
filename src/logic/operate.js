import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let r = 0;
  const r2 = null;
  switch (operation) {
    case '+':
      r = (x).plus(y);
      break;
    case '-':
      r = x.minus(y);
      break;
    case 'x':
      r = x.times(y);
      break;
    case '÷':
      if (y.e === 0) {
        return r2;
      }
      r = x.div(y);
      break;
    case '%':
      r = x.div(100);
      break;
    default:
      r = 'fail';
  }
  return r.toString();
};

export default operate;
