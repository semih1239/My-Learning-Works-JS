// Type Converesion

// let num1 = Number('5');
// let num2 = Number('10');


// let total = num1 + num2


// console.log(total)
// console.log(typeof total)

let val;

// number to string

val = String(10)

//bool to string

val = String(true)

// date to string

val = String(new Date().getDay())

// array to string

val = String([1,2,3,4])

// tostring

val = (10).toString()
val = (false).toString()

// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// String to Number

val = Number('10');
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('a')
val = Number([1,2,3,4])

// parseInt
// parseFloat

val = parseInt('10')
val = parseInt('10.5')
val = parseFloat('10.5')



console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))