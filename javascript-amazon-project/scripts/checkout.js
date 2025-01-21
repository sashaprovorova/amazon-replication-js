import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js'; //just runs the entire code from this file instead of importing stuff from it 
// import '../data/backend-practice.js'
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';

// runs and waits for multiple promises 
Promise.all([
  loadProductsFetch(), //replaces the following
  /*
  new Promise((resolve) => {
    loadProducts(()=>{
      resolve('value1'); //shares values between two steps
    });
  }), */
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

/*
//resolve similar to done, lets us control when to go to the next step
new Promise((resolve) => {
  loadProducts(()=>{
    resolve('value1'); //shares values between two steps
  });
}).then((value)=>{
  console.log(value); //gets the value from previous step
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  }).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
})
*/


/*
loadProducts(() => {
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/