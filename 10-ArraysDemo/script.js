// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

let car = ["Bmw","Mercedes","Opel","Mazda"]


// Dizi kaç elemanlıdır ?
console.log(car.length)

// Dizinin ilk ve son elemanı nedir ?
console.log(car[0])
console.log(car[car.length-1])

// "Renault" değerini dizinin sonuna ekleyin.
car[car.length] = "Renault"
car[car.length] = "Seat"
console.log(car)


// "Toyota" değerini dizinin başına ekleyin.
car.unshift("Toyota")
console.log(car)


// "Seat" değerini siliniz.

car.pop()
console.log(car)

// "Toyota" değerini siliniz.
car.shift()
console.log(car)

// Dizi elemanlarını ters çevirin

car.reverse()
console.log(car)

// Dizi elemanlarını alfabetik olarak sıralayın.
car.sort()
console.log(car)

// [1,2,5,80] dizisini sıralayın.
let numbers = [1,2,5,80,15]
numbers.sort()
console.log(numbers)


// "Opel" değeri dizinin bir elemanımıdır ?
console.log(car.indexOf("Opel"))

// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.

let str = "Chevrolet,Dacia"
str = str.split(',')
console.log(str)


// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

car = car.concat(str)
console.log(car)

// Oluşturulan diziden son 2 elemanı siliniz.
car.pop()
car.pop()
console.log(car)

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

let studentA = ["Yigit","Bulut",2010]
let studentB = ["Semih","Ayyildiz",1995]
let studentC = ["Ahmet", "Tekin",1990]

students = [studentA,studentB,studentC]

console.log(students)