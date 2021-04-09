// Template Literals

const fullName = 'Semih Ayyildiz'
const city = 'Copenhagen'
const yearOfBirth = 1995

let val;

val = 'my name is ' + fullName + ' I\'m ' + (2021-yearOfBirth) + ' years old.' + 
      ' and I live in ' + city;  

// ternary operator

val = `my name is ${fullName} I'm ${2021-yearOfBirth>=18?'over 18':'under 18'} and I live in ${city}`


console.log(val)