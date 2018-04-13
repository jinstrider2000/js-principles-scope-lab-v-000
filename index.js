// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'me';

function upperCaseCustomerName() {
  customerName = customerName[0].toUpperCase() + customerName.slice(1);
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'you';
}