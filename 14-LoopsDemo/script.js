/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/


let hak ,can
let tahmin,sayac=0
let sayi = Math.floor((Math.random()*10)+1)
can = Number(prompt('kac defada bileceksiniz? '))
hak=can
console.log(sayi)

while(hak>0){
    hak--
    sayac++
    tahmin = Number(prompt('Bir Sayi Giriniz : '))

    if (sayi == tahmin){
        console.log(`tebrikler ${sayac} defada bildiniz`)
        console.log(`puan: ${100-(100/can)*(sayac-1)}`)
        break
    }
    else if(sayi> tahmin){
        console.log('yukari')
    }
    else{
        console.log('asagi')
    }
    if (hak==0){
        console.log('Hakkiniz bitti. sayi : ' + sayi)
    }
}