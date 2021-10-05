'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const {
    getSeed,
    getWatch,
    createWatch,
    deleteWatch,
    updateWatch } = require('./controller/dataController');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;

mongoose.connect(`${ MONGO_SERVER }`, { useNewUrlParser: true }).then(() => {
    console.log("ATlas Connected")
})

app.get('/', (req, res) => {
    res.send('iam working');
});

app.get('/seed', getSeed);
app.get('/getWatch', getWatch);
app.post('/createWatch', createWatch);
app.delete('/deleteWatch/:id', deleteWatch);
app.put('/updaetWatch/:id', updateWatch);


app.listen(PORT, () => {
    console.log(`listinning to PORT ${PORT}`)
})