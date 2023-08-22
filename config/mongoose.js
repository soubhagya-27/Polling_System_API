const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://soubhagyabehera525:Soubhagya123@cluster0.vzvkpuv.mongodb.net/');

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;