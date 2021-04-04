// Operators

let val;
const a=10;
const b=5;
const c=5;
let d=3;

// arithmetic operators

val = a + b
val = a - b
val = a * b
val = a / b
val = a % b
val = d++;
val = ++d;
val = --d;
val = d--;

// assigment operators

val = a;
val += a  // val = val + a;
val -= a; // val = val - a
val *= a; // val = val * a
val /= a; // val = val / a
val %= a; // val = val % a

// comparision operators

val = a==b
val = b==c
val = b===c // deger ve tip kontrolu yapilir
val = 5 === '5' 
val = a!=b; // a b ye esit degil mi
val = a!==b;
val = a < b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;

// logical operators

// && (And)

val = (a>b) && (a>c)

// || (Or)

val = (a>b) || (a<c)

// ! (Not)

val = !(a>b)



console.log(val)
console.log(typeof val)