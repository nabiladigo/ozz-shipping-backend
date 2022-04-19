const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            // required: [true, 'name can not be empty']
        },
        image:{
            type: String,
            // required: [true, 'image can not be empty']
        },
        price: {
            type: Number,
            min: [0, 'price can not be empty'],
            // required: [true, 'price can not be empty'],
        },
        weight:{
            type: Number,
            min: [0, 'you can not add a negative number'],
            // required: [true, 'wieght can not be empty'],
        },
        trackingNumber:{
            type: String,
        },
        user: {
          type: String,
        //   required: true,
          ref: "User",
        },
    },
    {
        timestamps :true,
    }
);

const Package= mongoose.model('Package', packageSchema);

module.exports = Package;