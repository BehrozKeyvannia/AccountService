module.exports = {
    data: [
        {
            "id": 1, 
            "number": "1357756", 
            "name":"Personal account", 
            "creditcard": false, 
            "synthetic": false, 
            "balance": 1202.14
        },
        {
            "id": 2, 
            "number": "2446987", 
            "name":"Business account", 
            "creditcard": false, 
            "synthetic": false, 
            "balance": 34057.00
        },
        {
            "id": 3, 
            "number": "9981644", 
            "name":"Credit card", 
            "creditcard": true, 
            "synthetic": true, 
            "balance": 10057.00
        },
        {
            "id": 4, 
            "number": "", 
            "name":"Expense claims", 
            "creditcard": false, 
            "synthetic": true, 
            "balance": 0
        }
    ],
    testData: {
        twiceBalance: [
            {
                "id": 1, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 1202.14
            },
            {
                "id": 2, 
                "number": "2446987", 
                "name":"Business account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 34057.00
            },
            {
                "id": 3, 
                "number": "9981644", 
                "name":"Credit card", 
                "creditcard": true, 
                "synthetic": false, 
                "balance": -10057.00
            },
            {
                "id": 4, 
                "number": "", 
                "name":"Expense claims", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 0
            }
        ],
        noSatisfiedAccount: [
            {
                "id": 1, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": -1202.14
            },
            {
                "id": 2, 
                "number": "2446987", 
                "name":"Business account", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 34057.00
            },
            {
                "id": 3, 
                "number": "9981644", 
                "name":"Credit card", 
                "creditcard": true, 
                "synthetic": true, 
                "balance": -10057.00
            },
            {
                "id": 4, 
                "number": "", 
                "name":"Expense claims", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 0
            }
        ],
        negativeBalance: [
            {
                "id": 1, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": -1202.14
            },
            {
                "id": 2, 
                "number": "2446987", 
                "name":"Business account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": -34057.00
            },
            {
                "id": 3, 
                "number": "9981644", 
                "name":"Credit card", 
                "creditcard": true, 
                "synthetic": false, 
                "balance": -10057.00
            },
            {
                "id": 4, 
                "number": "", 
                "name":"Expense claims", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 0
            }
        ],
        syntheticAccount: [
            {
                "id": 1, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 1202.14
            },
            {
                "id": 2, 
                "number": "2446987", 
                "name":"Business account", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 34057.00
            },
            {
                "id": 3, 
                "number": "9981644", 
                "name":"Credit card", 
                "creditcard": true, 
                "synthetic": true, 
                "balance": -10057.00
            },
            {
                "id": 4, 
                "number": "", 
                "name":"Expense claims", 
                "creditcard": false, 
                "synthetic": true, 
                "balance": 0
            }
        ],
        singleAccount: [
            {
                "id": 5, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 1202.14
            }
        ],
        highBalances: [
            {
                "id": 1, 
                "number": "13523226", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 1202.14
            },
            {
                "id": 2, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 5202.14
            },
            {
                "id": 3, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 2302.14
            },
            {
                "id": 4, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 4202.14
            },
            {
                "id": 5, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 14202.14
            },
            {
                "id": 6, 
                "number": "1357756", 
                "name":"Personal account", 
                "creditcard": false, 
                "synthetic": false, 
                "balance": 13202.14
            },
        ]
    }
};