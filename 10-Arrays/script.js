// Arrays

let names = ['semih','yusuf','ugur']
let years = [1900,1980,2015,2002]
let mix = ['semih','ayyildiz',1995,null,undefined,['movie','book']]


// // get array item

// console.log(names[0])
// console.log(names[3])

// //set array item
// names[names.length] = 'asd'

// // add item

// years.push(1986);
// years.unshift(1986);

// // remove item

// years.pop()
// years.shift()


// //indexOf

// let index = names.indexOf('semih')
// console.log(index)

// // reverse
// names.reverse()

// // sort

// years.sort();

// // concat

// let val = years.concat(names);
// console.log(val)

// splice

names.splice(2,0,'seda')



function over18(year){
    let age = 2021 - year
    return age >= 18
}

console.log(over18(1990))

// find

// let val = years.find(over18)

// filter

let val = years.filter(over18);

console.log(val)





console.log(names)
console.log(names.length)
console.log(typeof names)

// console.log(years)
// console.log(mix)