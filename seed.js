const db = require("./models");

const car = [{
    _id: 0,
    make: 'Porsche',
    model: '911 Turbo',
    year: '2018'
},
{
    _id: 1,
    make: 'lamborghini',
    model: 'huracan',
    year: '2020'
},
{
    _id: 2,
    make: 'Tesla',
    model: 'Model X',
    year: '2017'
},
{
    _id: 3,
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