let customer = prompt('Is the customer our customer for more than 5 years?')

switch (customer) {
    case 'yes':
        console.log('We can accept our 5 years over customers car.')
        break
    case 'no':
        let color = prompt('what is color of car?')
        let model = prompt('What is the car model?')
        let age = prompt('What is year of car?')

        switch (color) {
            case 'red':
                switch (model) {
                    case 'bmw':
                        if (age > 2010 && age < 2019) {
                            console.log('We can accept that car.')
                        }
                        break
                    case 'audi':
                        if ((age > 2005 && age < 2010) || (age > 2014 && age < 2020)) {
                            console.log('We can accept that car')
                        }
                        break
                }
            case 'black':
                switch (model) {
                    case 'audi':
                        if ((age > 2005 && age < 2010) || (age > 2014 && age < 2020)) {
                            console.log('We can accept that car')
                        }
                        break
                    case 'vw':
                        if (age>2001 && age <2018){
                            console.log('We can accept that car')
                        }
                        break
                    case 'bmw' :
                        if (age == 2020){
                            console.log('We can accept that car')
                        }
                        break
                }
                break
            default :
            console.log('We cant accept this car')
            break
        }
}