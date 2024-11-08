const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust3";

main().then(()=>{
    console.log("connected to db");
}).catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner:"6729a4751391436d09ed72e9"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();