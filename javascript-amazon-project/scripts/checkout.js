import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js'; //just runs the entire code from this file instead of importing stuff from it 
// import '../data/backend-practice.js'
import {loadProducts} from '../data/products.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});