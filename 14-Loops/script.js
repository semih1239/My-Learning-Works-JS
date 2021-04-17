// Loops

// for loop

// for(let i=0; i<10;i++){
   
//         if (i==3){
//             console.log('my favorite number: '+ i)
//             continue
//         }

//         if (i==6){
//             console.log('my worst number: ' + i)
//             break
//         }



//         console.log(i)
// }


// while loop

// let i=0

// while(i<10){
//     console.log(i)
//     i++
// }


// // do while loop

// let i=0 
// do{
//     console.log(i)
//     i++
// }while(i<10)

// let result = 1
// for (let i=10;i>0;i--){
//     if(i%2==1){
//         result *= i
//     }
// }

// console.log(result)

let val = '\n'

for (let i=0;i<10;i++){

    for(let j=0;j<10;j++){
        val += '* '
    }
    val += '\n'
}
console.log(val)