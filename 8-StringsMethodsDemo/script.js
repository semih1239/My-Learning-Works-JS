// Demo : Strings

let sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business.  "

let url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";


// cümle kaç karakterlidir ?
console.log(sentence.length)

// kaç kelimeden oluşuyor ?
console.log((sentence.trim().split(' ')).length)

// Tüm cümleyi küçük harfe çevirin.
sentence = sentence.toLowerCase()
console.log(sentence)


// Cümlenin başındaki ve sonundaki boşlukları siliniz.

// // sentence = sentence.trim()

// '-' karakterini silin.

sentence = sentence.replace("-","")
console.log(sentence)
// url'nin içinden str kısmını çıkarınız.
// url = url.replace('http://sadikturan.com/Modern ','')
// console.log(url)


// url hangi protocol'u kullanmaktadır ? (http,https)

console.log(url.substring(0,5))

// url, '.com' ifadesini içeriyor mu?

console.log(url.indexOf('.com'))


// url string ifadesini geçerli bir url olarak düzenleyiniz.
url = url.toLocaleLowerCase()
url = url.substring(0,66)
url = url.replace(/ /g,'-')
url = url.replace(/ı/g,'i')
console.log(url)