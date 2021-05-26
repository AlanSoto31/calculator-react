import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let r = 0;
  switch (operation) {
    case '+':
      r = Number(x) + Number(y);
      break;
    case '-':
      r = x - y;
      break;
    case 'x':
      r = x * y;
      break;
    case '÷':
      r = x / y;
      break;
    case '%':
      r = x / 100;
      break;
    default:
      r = 'fail';
  }
  return r.toString();
};

export default operate;
