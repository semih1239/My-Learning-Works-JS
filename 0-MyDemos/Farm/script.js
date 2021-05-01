let farm = ['inek','tavuk','koyun','inek','inek','tavuk','koyun']
total = 0
i=0
while(i<farm.length){
    if(farm[i]=='inek'){
        total = total +4
    }
    else if(farm[i]=='tavuk'){
        total = total + 2
    }
    else if(farm[i]=='koyun'){
        total = total + 4
    }
    i++
}
console.log(total)