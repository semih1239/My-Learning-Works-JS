// Car Service Application

let carBuyDay = 20
let carBuyMonth = 4
let carBuyYear = 2019
let carBuyDate = `${carBuyDay}.${carBuyMonth}.${carBuyYear}`
let day = new Date().getDate()
let month = new Date().getMonth() + 1
let year = new Date().getFullYear()
let today = `${day}.${month}.${year}`

if (today == `${carBuyDay}.${carBuyMonth}.${carBuyYear + 1}`) {
    console.log('Today is your first year. Please take away your car service.')
}
else if (today == `${carBuyDay}.${carBuyMonth}.${carBuyYear + 2}`) {
    console.log('Today is your second year. Please take away your car service.')
}
else if (today == `${carBuyDay}.${carBuyMonth}.${carBuyYear + 3}`) {
    console.log('Today is your third year. Please take away your car service.')
}
else {
    console.log('Today is not your sevice day.')
}

// var trafigeCikis = new Date('04/20/2014');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun =Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
//     console.log('2.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log('3.servis bakım süreniz gelmiştir.')
// }else{
//     console.log('bilinmeyen bir süre');
// }


// console.log(trafiktekiGun);



// Login

console.log('Welcome. Who is there?')

let login = 'admin'
switch (login) {
    case 'cancel':
        console.log('Cancelled')
        break
    case 'admin':
        console.log('Password?')
        let password = 'TheMaster'
        switch (password) {
            case 'cancel':
                console.log('Cancelled')
                break
            case 'TheMaster':
                console.log('Welcome')
                break
            default:
                console.log('Wrong Password')
                break
        }
        break
    default:
        console.log("I don't know you")

}

// if(result == 'cancel'){
//     console.log('cancelled');
// }else if(result == 'Admin'){   

//     var password = prompt('enter your password : ');

//     if(password =='cancel'){
//         console.log('cancelled');
//     }else if(password== '1234'){
//         console.log('welcome Admin');
//     }else{
//         console.log('wrong password');
//     }

// }else{
//     console.log('I dont know you');
// }