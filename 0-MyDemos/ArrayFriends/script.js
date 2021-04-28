let array1,array2,data

array1 = [1,5,9]
array2 = ['semih','celal','ugur']

data = 'ugur'

if (data=='semih'){
    total = array1[0] + array1[1] + array1[2]
}

else if(data =='celal'){
    total = ((array1[0]+array1[1]+array1[2]) / array1.length)
}

else if(data == 'ugur'){
    total = array1[0]
}

console.log(total)

// semih toplami / celal ortalama / ugur 1. elemani versin / if else ile yap