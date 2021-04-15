// Object Literals

let val;

let person = {
    firstName: 'Semih',
    lastName: 'AYYILDIZ',
    age: 26,
    hobbies: ['music', 'game'],
    address: {
        city: 'Copenhagen',
        country: 'Denmark'
    },
    getBirthYear: function () {
        return 2021 - this.age
    }
}


val = person;
val = person.firstName
val = person.lastName
val = person['firstName']
val = person.age
val = person.hobbies
val = person.hobbies[1]
val = person.hobbies.length
val = person.address
val = person.address.city
val = person.getBirthYear()

let people = [
    {firstName : 'Semih',lastName : 'AYYILDIZ'},
    {firstName : 'Yusuf',lastName : 'AYYILDIZ'},
    {firstName : 'Ugur',lastName : 'AYYILDIZ'}
]

val = people[2]
val = people[2].firstName

for (let i = 0; i<people.length;i++){
    console.log(people[i].firstName)
}

console.log(val)
console.log(typeof person)
