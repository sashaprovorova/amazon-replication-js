import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import '../data/cart-class.js'; //just runs the entire code from this file instead of importing stuff from it 

renderOrderSummary();
renderPaymentSummary();