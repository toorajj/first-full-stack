const db = require("./models");

const car = [{
    make: 'Porsche',
    model: '911 Turbo',
    year: '2018'
},
{
    make: 'lamborghini',
    model: 'huracan',
    year: '2020'
},
{
    make: 'Tesla',
    model: 'Model X',
    year: '2017'
},
{
    make: 'BMW',
    model: '2002 Turbo',
    year: '1974'
}
];

db.Car.insertMany(car, function(error, data){
    if(error){
      console.log(error);
    } else {
      console.log(data);
    }
    process.exit();
  });