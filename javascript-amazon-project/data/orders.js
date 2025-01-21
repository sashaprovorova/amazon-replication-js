export const orders = JSON.parse(localStorage.getItem('orders')) || [] ; // empty array as default

export function addOrder(order){
  orders.unshift(order); // adds to the front of the array and not back
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}