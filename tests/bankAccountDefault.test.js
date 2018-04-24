var bankAccount = require("../index.js");
var mock = require("../data.js");

var clearInvalidBankAccounts = bankAccount.clearInvalidBankAccounts;
var sortByHighestBalance = bankAccount.sortByHighestBalance;
var twiceBalanceCheck = bankAccount.twiceBalanceCheck;

var singleAccount = mock.testData.singleAccount;
var syntheticAccount = mock.testData.syntheticAccount;
var noSatisfiedAccount = mock.testData.noSatisfiedAccount;
var twiceBalance = mock.testData.twiceBalance;
var negativeBalance = mock.testData.negativeBalance;
var highBalances = mock.testData.highBalances;

test('Should return single account with id -> 5', () => {
    return clearInvalidBankAccounts(singleAccount)
    .then(function(clearedArray){
        if(typeof clearedArray.id === 'number') return expect(clearedArray).toEqual({ id: 5 });
        return sortByHighestBalance(clearedArray)
        .then(function(clearedAndSortedArray){
            return twiceBalanceCheck(clearedAndSortedArray)
            .then(function(result){
                expect(result).toEqual({ id: 2 });
            });
        });
    });  
});

test('Should return null since synthetic accounts', () => {
    return clearInvalidBankAccounts(syntheticAccount)
    .then(function(clearedArray){
        return expect(clearedArray).toEqual({ id: null });
    });
});

test('Should return null since no satisfied accounts', () => {
    return clearInvalidBankAccounts(noSatisfiedAccount)
    .then(function(clearedArray){
        return expect(clearedArray).toEqual({ id: null });
    });  
});

test('Should return account with id -> 2 since balance is twice the other balances', () => {
    return clearInvalidBankAccounts(twiceBalance)
    .then(function(clearedArray){
        if(typeof clearedArray.id === 'number') return expect(clearedArray).toEqual({ id: 2 });
        return sortByHighestBalance(clearedArray)
        .then(function(clearedAndSortedArray){
            return twiceBalanceCheck(clearedAndSortedArray)
            .then(function(result){
                expect(result).toEqual({ id: 2 });
            });
        });
    });  
});

test('Should return no account since all balances are negative', () => {
    return clearInvalidBankAccounts(negativeBalance)
    .then(function(clearedArray){
        return expect(clearedArray).toEqual({ id: null });  
    });  
});

test('Should return the account with highest balance -> id: 5', () => {
    return clearInvalidBankAccounts(highBalances)
    .then(function(clearedArray){
        return sortByHighestBalance(clearedArray)
        .then(function(clearedAndSortedArray){
            return twiceBalanceCheck(clearedAndSortedArray)
            .then(function(result){
                return expect(result).toEqual({ id: 5 });
            });
        });
    });
});
