// Scopes

// ** Global Scopes
let name = 'Semih'
let age = 30

function logName(){
    let name = 'Yusuf'
    console.log('function scope',name)
}

if (true){
    let age = 26
    console.log('block scope',name,age)
}

logName()
console.log(name)


// ** Local Scopes

// Fonksiyonlar kendi scopelarini olusturur.
// Blocklar yeni scope olusturmaz.
// ES6 ile gelen let ve const block scope olusturur
// let ve const degiskenlerine disaridan ulasilamaz. block icindekilere var kullanmak gerekir.



console.log('*******************')

if (true){
    var model = 'volvo'
    let year = 2016
    const color = 'white'
    console.log('block scope',model,year,color)
}

console.log(model)
// console.log(color)

var a = 1

for (let i=0;i<10;i++){
    console.log('i',i)
}

console.log(i)
