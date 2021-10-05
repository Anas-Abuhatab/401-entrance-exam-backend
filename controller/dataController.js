'use strict';

const { default: axios } = require("axios");
const { seed } = require("../modles/seedData");
const { watchModle } = require("../modles/watchModle");


let getSeed = async (req,res)=>{
    axios.get(`https://watches-world.herokuapp.com/watches-list/`).then(data=>{
        let seedData =data.data.map(item=>{
            return new seed(item)
        })
        res.json(seedData);
    });
};

let getWatch = async (req,res)=>{
    watchModle.find().then(data=>{
        res.json(data);
    });
};

let createWatch = async (req,res)=>{
    let bodydata = req.body;
    let newWatch = new watchModle(bodydata);
    await newWatch.save();
    await watchModle.find().then(data=>{
        res.json(data);
    });    
}
let deleteWatch = async (req,res)=>{
    let watchID = req.params.id;
    await watchModle.findByIdAndDelete(watchID);
    await watchModle.find().then(data=>{
        res.json(data);
    });
}
let updateWatch = async (req,res)=>{
    let watchID = req.params.id;
    let bodydata = req.body;
    await watchModle.findOne({_id:watchID}).then(async data=>{
        data.id = bodydata.id ,
        data.title = bodydata.title,
        data.description = bodydata.description,
        data.toUSD = bodydata.toUSD,
        data.image_url = bodydata.image_url
        await data.save()
    });
    await watchModle.find().then(data=>{
        res.json(data);
    });
};

module.exports={getSeed,
                getWatch,
                createWatch,
                deleteWatch,
                updateWatch}