const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        minlength: 2
    },
    model: {
        type: String,
        required: true,
        minlength: 2
    },
    year: {
        type: Number,
        required: true,
        minlength: 2
    },
}, {
    timestamps: true
});
const Car = mongoose.model("Cars", carSchema);

module.exports = Car;


/*module.exports = [{
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
];*/