const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type == 'credit') {
        user.balance += transaction.value;
    } else if ( transaction.type == 'debit') {
        user.balance -= transaction.value;
    }
};

function getHigherTransactionByType(type) {
    let higher = 0;
    let higherTransaction = {};

    for (transaction of user.transactions) {
        if (transaction.type == type){
            if (transaction.value > higher) {
                higher = transaction.value;
                higherTransaction = transaction;
            };
        };
    };

    return higherTransaction;
}

function getAverageTransactionValue() {
    let average = 0;
    
    for (transaction of user.transactions) {
        average += transaction.value;
    };

    average /= user.transactions.length;

    return average;
}

function getTransactionsCount() {
    let cre = 0; 
    let deb = 0;

    for (transaction of user.transactions) {
        if (transaction.type == 'credit') {
            cre += 1;
        }else if (transaction.type == 'debit'){
            deb += 1;
        }
    }

    return {credit: cre, debit: deb};
}

const transaction01 = {type: 'credit', value: 50.5};
const transaction02 = {type: 'debit', value: 10.5};
const transaction03 = {type: 'credit', value: 100};
const transaction04 = {type: 'debit', value: 30};

createTransaction(transaction01);
createTransaction(transaction02);
createTransaction(transaction03);
createTransaction(transaction04);

console.table(user.transactions);

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

console.log();
console.log(`Média de transações igual a ${getAverageTransactionValue()}`);
console.log(getTransactionsCount());