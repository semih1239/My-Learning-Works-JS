// // Switch Statements

// let category = 'phone'

// switch (category) {
//     case 'phone':
//         console.log('phone category')
//         break

//     case 'computer':
//         console.log('computer category')
//         break

//     default:
//         console.log('Wrong Category')
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday'
//         break
//     case 1:
//         day = 'Monday'
//         break
//     case 2:
//         day = 'Tuesday'
//         break
//     case 3:
//         day = 'Wednesday'
//         break
//     case 4:
//         day = 'Thursday'
//         break
//     case 5:
//         day = 'Friday'
//         break
//     case 6:
//         day = 'Saturday'
//         break
// }
// console.log(`Today is ${day}`)

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = 'Weekend'
//         break
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day = 'Weekdays'
//         break
// }

// console.log(`Today is ${day}`)

const age = 26
const firstName = 'Sam'

switch (true) {
    case age > 0 && age < 12:
        console.log(`${firstName} is a child`)
        break
    case age >= 13 && age <= 19 :
        console.log(`${firstName} is a teenager`)
        break
    default:
        console.log(`${firstName} is an adult`)
}



