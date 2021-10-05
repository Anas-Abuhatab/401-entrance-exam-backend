'use strict';

const mongoose =require('mongoose');

const watchSchema = mongoose.Schema({

    id:Number ,
    title: String,
    description: String,
    toUSD: String,
    image_url:String

});

const watchModle = mongoose.model('watchDatas',watchSchema);

module.exports={watchModle};