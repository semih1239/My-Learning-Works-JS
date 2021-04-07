// Strings

const firstName = 'Semih'
const lastName = 'AYYILDIZ'
const age = 35;
let hobbies = 'cinema,book,run'
let val;

// string concatenation

val = firstName + ' ' + lastName
val = 'Semih'
val += ' AYYILDIZ'

// val = 'My name ' + firstName + ' ' + lastName+ ' and my age ' + age + " Elazig'de yasiyorum";

// string concat

// val = firstName.concat(',',lastName)

// string length
// val = val.length;

// string uppercase - lowercase

val = val.toUpperCase();
val = val.toLowerCase();

// String search

//string replace
val = val.replace('semih','Yusuf');

// trim

// val = val.trim();


// Substring

// val = val.substring(3,8);

// Slice

// val = val.slice(5)



// val = val.indexOf('y')
// val = val[0]

val = hobbies.split(',')

console.log(val);
console.log(typeof val);
