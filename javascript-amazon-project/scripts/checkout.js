import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js'; //just runs the entire code from this file instead of importing stuff from it 
// import '../data/backend-practice.js'
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';


async function loadPage(){

  try{
    // throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve('value3');
      });
    });

  } catch(error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

/*
// runs and waits for multiple promises 
Promise.all([
  loadProductsFetch(), //replaces the following
  
  // new Promise((resolve) => {
  //   loadProducts(()=>{
  //     resolve('value1'); //shares values between two steps
  //   });
  // }),
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
*/

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