// Date Object

let d = new Date();
let birthday = new Date(1995,1,10)

// Set methods   guncel bilgileri degistirebiliriz
// d.setFullYear(20)
// d.setMonth(5)
// d.setDate(10)
// d.setMinutes(10)

// Get Methods

// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getFullYear())
// console.log(d.getHours())
// console.log(d.getMonth())
// console.log(d.getSeconds())
// console.log(d.getMinutes())

console.log(d.getFullYear() - birthday.getFullYear())
console.log(d.getMonth() - birthday.getMonth())
console.log(d.getDate() - birthday.getDate())

console.log(d);
console.log(typeof d);