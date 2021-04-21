// // Demo : Funtions

// let accountMoney = 20000
// let anotherAccount = 100000
// let question = prompt('Please write withdraw money : ')
// function receive(a) {
//     if (a < accountMoney) {
//         console.log('You can take this money')
//     }
//     else {
//         answer = prompt('You dont have enought money. Do you want to receive additional account')
//         if(answer == 'yes' && anotherAccount>a){
//             console.log('Here your money')
//         }
//         else if(a>anotherAccount){
//             console.log('You dont have enought money,')
//         }
//         else{
//             console.log('GoodBye')
//         }
//     }
// }

// receive(question)

let accountA = {
    name : 'Semih AYYILDIZ',
    accountNo : '1234567',
    balance : 2000,
    addBalance : 1000
}

let accountB = {
    name : 'Yusuf AYYILDIZ',
    accountNo : '123456789',
    balance : 3000,
    addBalance : 2000
}

function takeMoney(account,amount){
    console.log(`Hello ${account.name}`)

    if(account.balance >= amount){
        account.balance = account.balance - amount
        console.log('You can take your money')
    }
    else {
        let total = account.balance + account.addBalance
        if(total >= amount){
            if(confirm('Dou you want add balance')){
                console.log('You can take your money')
                let balance = account.balance
                let addBalance = amount - balance
                account.balance = 0
                account.addBalance = account.addBalance - addBalance
            }
            else{
                console.log(`${account.accountNo} account number dont have ${amount}`)
            }
            
        }
        else{
            console.log('Sorry You dont have enought money')
        }
    }
}

takeMoney(accountA,2000)
takeMoney(accountA,3000)