// Numbers

let val;

// val = Number(10);
// val = parseInt('10')
// val = parseFloat('10.5');
// val = parseInt('10')

// val = isNaN('10')
// val = isNaN('a10')

// let num = 10.123456789;
// val = num.toPrecision(6);  //en bastan itibaren 2 basamak virgulden sonra degil
// val = num.toFixed(5)

val = Math.PI;
val = Math.round(2.4)  // En yakin sayiya yuvarlar.
val = Math.round(2.7)
val = Math.ceil(2.4);  // Her zaman yukariya yuvarlanir (3)
val = Math.floor(2.4)  // Her zaman asagiya yuvarlanir (2)
val = Math.sqrt(64);  // karekokunu alir.
val = Math.pow(2,4);  // 2 uzeri 4 alir.
val = Math.abs(-100);  // pozitif sayi verir
val = Math.min(1,34,6,8,5,3);  //minimum sayiyi verir
val = Math.max(1,34,6,8,5,3);  //maximum sayiyi verir
val = Math.random()  //  0-1 arasinda random bir sayi verir
val = Math.floor(Math.random()*100)  //  tabana esitleyerek 0-100 arasinda rastgele bir sayi alir.


console.log(val)
console.log(typeof val);