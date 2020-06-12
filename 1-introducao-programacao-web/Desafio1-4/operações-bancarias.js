const user = {
    name: 'Gustavo',
    transactions: [],
    balance: 0
}

function createTransaction(object){
    user.transactions.push(object)
    if(object.type == 'credit'){
        user.balance = user.balance + object.value
    }
    else{
        user.balance = user.balance - object.value
    }
}

function getHigherTransactionByType(t){
    let higher = 0

    if(t == 'credit'){
        for(let transaction of user.transactions){
            if(transaction.type == 'credit' && transaction.value > higher){
                higher = transaction.value
            }
        }
    }
    else{
        for(let transaction of user.transactions){
            if(transaction.type == 'debit' && transaction.value > higher){
                higher = transaction.value
            }
        }
    }
    return {
        type: t,
        value: higher
    }
}

function getAverageTransactionValue(){
    let sum = 0

    for(let transaction of user.transactions){
        sum = sum + transaction.value
    }
    
    const average = sum / user.transactions.length
    console.log(average)
}

function getTransactionsCount(){
    let c = 0
    let d = 0

    for(let transaction of user.transactions){
        if(transaction.type == 'credit'){
            c++
        }
        else{
            d++
        }
    }
 
    return {
        credit: c,
        debit: d
    }
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

const c = getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
console.log(c)

const d = getHigherTransactionByType('debit') // { type: 'debit', value: 80 }
console.log(d)

getAverageTransactionValue() // 70

const count = getTransactionsCount() // { credit: 2, debit: 2 }
console.log(count)