// // Functions

// function ageCalculate(birthYear){
//     return 2021- birthYear
// }

// let ageSemih = ageCalculate(1995)
// let ageUgur = ageCalculate(1980)
// let ageYusuf = ageCalculate(1983)

// console.log(ageSemih)
// console.log(ageUgur)
// console.log(ageYusuf)

// function whenWilliRetired(birthyear,name){
//     let age = ageCalculate(birthyear)
//     let retire = 65 - age

//     if(retire >0){
//         console.log(`You have ${retire} year for retired`)
//     }
//     else{
//         console.log('You are already retired')
//     }
// }

// whenWilliRetired(1995,'Semih')
// whenWilliRetired(1980,'Ugur')
// whenWilliRetired(1983,'Yusuf')





// function Declarations

// function sum(a,b){
//     let c = a+b
//     return c
// }

// console.log(sum(10,20))




// function Expressions

// ES6 Default Parameters

const sum = function(a=0,b=0){   //atanmadiginda 0 olur

    // if(typeof a === 'undefined'){a=0}
    // if (typeof b === 'undefined'){b=0}
    let c = a + b
    return c
}

function sumAll(){
    let total = 0
    for(let i = 0; i<arguments.length;i++){
        total+= arguments[i]
    }
    return total
}



console.log(sum(10,30))
console.log(sum(10))
console.log(sum(10,30,40,50))
console.log(sumAll(10,20,30,10,30))