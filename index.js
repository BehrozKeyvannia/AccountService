const express = require('express');
const mock = require('./data.js');
const Promise = require('bluebird');
const R = require("ramda");
const app = express();

app.get('/', (request, response) => {
  response.send('AccountService API');
});

app.get('/bankaccounts', (request, response) => {
  //Returning hard-coded data
  response.send(mock.data);
});

app.get('/bankaccounts/default', (request, response) => {
  
  //Clear out invalid bank accounts
  clearInvalidBankAccounts(mock.data, response)
  .then(function(clearedArray){
    
    //If the type is number, there is only one valid bank account
    //If null, no valid bank accounts were found.
    if(typeof clearedArray.id === 'number' || 
    typeof clearedArray.id === 'null') 
    return response.send(clearedArray);
    
    //We have a list of valid bank accounts, let's sort them based on the balance
    sortByHighestBalance(clearedArray)
    .then(function(clearedAndSortedArray){

      //Is the balance of the highest at least twice as much as the second highest?
      twiceBalanceCheck(clearedAndSortedArray)
      .then(function(result){
        return response.send(result);
      });
    });
  });
});

/**
* twiceBalanceCheck - checks whether the account with highest balance 
* is twice as much as the second highest (or in fact all other accounts).
* Returns a promise.
* @param {Array} arr - the paramter that contains account data
*/
var twiceBalanceCheck = function(arr){
  return new Promise(function(resolve, reject){
    if ((arr[0].balance * 2) > arr[1].balance) {
      resolve({ id: arr[0].id });
    }else{
      resolve({ id: null });
    }
  });
};

/**
* clearInvalidBankAccounts - clears out invalid bank accounts 
* which should not be returned to the user. Returns null if no valid accounts were found.
* If there is only one valid account, the id of that account is returned. Otherwise, a list of accounts is returned.
* Returns a promise.
* @param {Array} account - the paramter which contains accounts data in list. 
*/
var clearInvalidBankAccounts = function(account){
  
  return new Promise(function(resolve, reject){
    var clearedArray = [];
    R.map(function(element){
      if( element.synthetic === false && element.balance > 0){
        clearedArray.push(element);
      }
    }, account);
    
    if(clearedArray.length <= 1){
      if(clearedArray.length === 0) resolve({ id: null });
      else resolve({ id: clearedArray[0].id });
    }else{
      resolve(clearedArray);
    }
    
  });
};

/**
* sortByHighestBalance - function that sorts an array 
* with the balance attribute as sort value. Returns a promise.
* 
* @param {Array} arr - the array to be sorted
*/
var sortByHighestBalance = function(arr){
  return new Promise(function(resolve, reject){
    var sortedArray = arr.sort(function(a, b){
      return a.balance < b.balance;
    });
    
    if(sortedArray.length > 0){
      resolve(sortedArray);
    }
  });
};

app.listen(7000, () => {
  console.log('Express running on localhost:7000');
});

module.exports = {
  twiceBalanceCheck,
  sortByHighestBalance,
  clearInvalidBankAccounts
}