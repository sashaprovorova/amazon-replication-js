import {formatCurrency} from '../scripts/utils/money.js';

//automated tests

console.log('test suite: format currency');

//test case 1 (basic test)
console.log('converts cents into dollars');
if(formatCurrency(2095) === '20.95'){
  console.log('passed');
} else {
  console.log('failed');
}

//test case 2 (edge case)
console.log('works with 0');
if(formatCurrency(0) === '0.00'){
  console.log('passed');
} else {
  console.log('failed');
}

//test case 3 (edge case)
console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
} else {
  console.log('failed');
}

//test case 4 (edge case)
console.log('rounds down to the nearest cent');
if(formatCurrency(2000.4) === '20.00'){
  console.log('passed');
} else {
  console.log('failed');
}