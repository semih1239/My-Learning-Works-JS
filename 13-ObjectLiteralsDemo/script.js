/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/

let carInformations = [
    {
        id: 'bmw116d_1234',
        model: '116d',
        year: 2015,
        color: 'white',
        serviceRecords: [{
            id: 'bmw116d_1234_1',
            date: '30.01.2016',
            km: 13000,
            totalCost: 900,
            serviceDetails: [
                {id: 'bmw116d_1234_1_1', detail: 'oil-change', cost: 300 },
                {id: 'bmw116d_1234_1_2', detail: 'filter-change', cost: 300},
                {id: 'bmw116d_1234_1_3', detail: 'brake-hidrolic-change', cost: 300}
            ]
        },
        {
            id: 'bmw116d_1234_2',
            date: '10.01.2017',
            km: 28000,
            totalCost: 1800,
            serviceDetails: [
                {id: 'bmw116d_1234_2_1', detail: 'oil-change', cost: 350},
                {id: 'bmw116d_1234_2_2', detail: 'filter-change', cost: 350},
                {id: 'bmw116d_1234_2_3', detail: 'brake-hidrolic-change', cost: 300},
                {id: 'bmw116d_1234_2_3', detail: 'balat-change', cost: 800}
            ]
        }
        ]
    },
    {
        id: 'bmw118i_1234',
        model: '118i',
        year: 2015,
        color: 'white',
        serviceRecords: [{
            id: 'bmw118i_1234_1',
            date: '30.01.2016',
            km: 13000,
            totalCost: 900,
            serviceDetails: [
                {id: 'bmw118i_1234_1_1', detail: 'oil-change', cost: 300 },
                {id: 'bmw118i_1234_1_2', detail: 'filter-change', cost: 300},
                {id: 'bmw118i_1234_1_3', detail: 'brake-hidrolic-change', cost: 300}
            ]
        },
        {
            id: 'bmw118i_1234_2',
            date: '10.01.2017',
            km: 28000,
            totalCost: 1800,
            serviceDetails: [
                {id: 'bmw118i_1234_2_1', detail: 'oil-change', cost: 350},
                {id: 'bmw118i_1234_2_2', detail: 'filter-change', cost: 350},
                {id: 'bmw118i_1234_2_3', detail: 'brake-hidrolic-change', cost: 300},
                {id: 'bmw118i_1234_2_3', detail: 'balat-change', cost: 800}
            ]
        }
        ]
    },
]

console.log(carInformations[0]);
console.log(carInformations[0].id);
console.log(carInformations[0].model);
console.log(carInformations[0].color);
console.log(carInformations[0].serviceRecords);
console.log(carInformations[0].serviceRecords[0]);

console.log(carInformations[0].serviceRecords[0].km);
console.log(carInformations[0].serviceRecords[0].cost);
console.log(carInformations[0].serviceRecords[0].serviceDetails[0].cost);

// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);