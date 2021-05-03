const fishFarm = [
    {
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "Greece",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    }
]

const europeanCountry = [
    "Austria",
    "Italy",
    "Belgium",
    "Latvia",
    "Bulgaria",
    "Lithuania",
    "Croatia",
    "Luxembourg",
    "Cyprus",
    "Malta",
    "Czechia",
    "Netherlands",
    "Denmark",
    "Poland",
    "Estonia",
    "Portugal",
    "Finland",
    "Romania",
    "France",
    "Slovakia",
    "Germany",
    "Slovenia",
    "Greece",
    "Spain",
    "Hungary",
    "Sweden",
    "Ireland",
];
const swissRomandeRegion = ["FR", "GE", "JU", "NE", "VL", "VD"];


i = 0
// 111111

// while (i<(fishFarm.length)){
//     if (fishFarm[i].stockVolumeInKg>500){
//     console.log(fishFarm[i].fishType)}
//     i++
// }

// 222222

// while (i<(fishFarm.length)){
//     if((fishFarm[i].price)>9 && (fishFarm[i].price)<12){
//         console.log(fishFarm[i].fishType)
//     }
//     i++
// }

// 333333

// while (i < (fishFarm.length)) {
//     if ((fishFarm[i].saleLocations.indexOf("ZH") != -1) && fishFarm[i].season == "Winter") {
//         console.log(fishFarm[i].fishType)
//     }
//     i++
// }

// 4444    ????????????????????????????????????????/

// let baliklarinTarihleri = [];

// function bulBaliklarinTarihleri() {
//     for (let index = 0; index < fishFarm.length; index++) {
//         fishFarm.sort(function (x, y) {
//             return x.entryDate - y.entryDate
//         });
//         baliklarinTarihleri.push(fishFarm[index].fishType + " " + fishFarm[index].entryDate + "\n")

//     };
//     console.log("sirali" + baliklarinTarihleri)

// };
// bulBaliklarinTarihleri()


// 555

// while (i < fishFarm.length) {
//     if ((fishFarm[i].price < 10)) {
//         let j=0
//         while (j < europeanCountry.length) {
//             if(fishFarm[i].originCountry == europeanCountry[j]){
//             console.log(fishFarm[i].fishType)}
//             j++
//         }
//     }
//     i++
// }


// while (j < europeanCountry.length) {
//     if(fishFarm[4].originCountry == europeanCountry[j]){
//     console.log(fishFarm[4].fishType)}
//     i++
// }




// 666666
// let stock = 0
// while (i<(fishFarm.length)){
//     stock = stock + Number(fishFarm[i].stockVolumeInKg)
//     i++
// }
// console.log(stock)


// 7

// let name;
// let cost = 0

// while (i<fishFarm.length){
//         if(fishFarm[i].price>cost){
//             cost = fishFarm[i].price
//             expensive = fishFarm[i].fishType
//         }
//     i++
// }
// console.log(expensive)

// var index = 0

// function enPahaliBalik() {
//     let fiyat = 0
//     let isim;
//     for (let index = 0; index < fishFarm.length; index++) {
//         if (fishFarm[index].price > fiyat) {
//             fiyat = fishFarm[index].price
//             isim = fishFarm[index].fishType
//         };
//     };
//     console.log("En pahali olan balik:" + " " + isim + ", " + "fiyat:" + " " + fiyat)
// };
// enPahaliBalik()


// expensive.sort( function(a,b) { return a - b; } )
// while (i<(fishFarm.length)){
//     val = (fishFarm[i].price).indexOf(expensive[expensive.length])
//     if (val>0){console.log(fishFarm[i].fishType)}
//     i++
// }


// console.log(expensive)

// 8

var day = 0
while (i < fishFarm.length) {
    if(fishFarm[i].durationInDays>day){
    day = fishFarm[i].durationInDays   
    }
    i++
}
i = 0
while (i<fishFarm.length){
    if(fishFarm[i].durationInDays===day){
        console.log(fishFarm[i].originCountry)
    }
    i++
}



// 9


// var fish = []
// while (i < fishFarm.length) {
//     if (fishFarm[i].season == 'Winter' || fishFarm[i].season == 'Autumn') {
//         let j = 0
//         while (j < swissRomandeRegion.length) {
//             if (fishFarm[i].saleLocations.indexOf(swissRomandeRegion[j]) != (-1)) {
//                 fish.push(fishFarm[i].fishType)
//             }
//             j++
//         }
//     }
//     i++
// }
// var ofish = [...new Set(fish)]
// console.log(ofish)

//  10


// var stock = 0
// while (i < fishFarm.length) {
//     if(fishFarm[i].saleLocations.indexOf('TG') != (-1)){
//         stock = stock + ((fishFarm[i].stockVolumeInKg)/(fishFarm[i].saleLocations.length))
//     }
//     i++
// }
// console.log(stock)

// 11

// var number = 0
// var kg = 0
// while (i < fishFarm.length) {
//     if(fishFarm[i].season=='Winter'){
//         let j=0
//             if(europeanCountry.indexOf(fishFarm[i].originCountry)==(-1)  
//             && fishFarm[i].saleLocations.indexOf('ZH')!=(-1)){
//                 kg = kg + fishFarm[i].itemWeightInGrams
//                 number = number + 1
//             }
//     }
//     i++
// }

// console.log(kg/number)
// console.log(kg)
// console.log(number)