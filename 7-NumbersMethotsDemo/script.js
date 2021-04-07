var num = 15.123456789

console.log(num.toFixed(1))

console.log(num.toFixed(3))

console.log(Math.round(num))

console.log(Math.floor(num))

console.log(Math.ceil(num))

num1 = Math.min(1,2,10,56,20)

num2 = Math.max(1,2,10,56,20)

console.log(num1)
console.log(num2)

let min = 50
let max = 100

let random = min + Math.random()*(max-min)

console.log(Math.floor(random))

let salary = 3700

let extrahour = 10.3

let augustextrahour = 42

let tax = 0.25

let extra = augustextrahour * extrahour

let totalsalary = salary + extra

console.log((totalsalary*(1-tax)).toFixed(3))