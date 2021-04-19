// Loops in Array & Object

let cars = ['Bmw','Mercedes','Toyota']
let people =[
    {firstName:'Semih',lastName:'AYYILDIZ'},
    {firstName:'Yusuf',lastName:'AYYILDIZ'},
    {firstName:'Celal',lastName:'AYYILDIZ'}
]

// for (let i=0;i<cars.length;i++){
//     console.log(cars[i])
// }

// for (let i=0;i<people.length;i++){
//     console.log(people[i].firstName)
// }



// for-in

// Arrays

// for (let i in cars){
//     console.log(`index : ${i} value ; ${cars[i]}`)
// }

for (let i in people){
    console.log(`index : ${i} value ; ${people[i].firstName}`)
}


// Objects

// // for each

// cars.forEach(function(item){
//     console.log(item)
// })

people.forEach(function(item){
    console.log(item.firstName)
})

// map : return an array

// let val = people.map(function(item){
//     return item.firstName + ' ' + item.lastName
// })

// console.log(val)

let numbers = [1,5,6,8,10]

let num = numbers.map(function(n){
    return n*n
})

console.log(num)