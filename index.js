const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/data',function(req,res)


{Data.find()
   .then((item)=>res.send(item))
})

app.listen(8080, () => {
    console.log("Server connected");
});

mongoose.connect('mongodb+srv://sivam1:sivam@cluster0.ay9q8jt.mongodb.net/siva')
    .then(() => console.log('Connected to MongoDB'))

// Define Schema
const newSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    amount: Number
});

// Define Model
const Data = mongoose.model('Data', newSchema);
// Create a new item

// Creating new data for testing
// const data1 = new Data({
//     name: "Siva",
//     email: '2541542455@gmail.com',
//     password: 'pass123',
//     amount: 6000
// });

// // Save the data
// data1.save()
//     .then(() => console.log('Data saved successfully'))
   
