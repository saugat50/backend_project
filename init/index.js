const mongoose = require("mongoose");
const initdata = require("./data");
const listing = require("../models/listing");


const MONGO_URL = "mongodb://127.0.0.1:27017/festiva";

main().then(() => {
    console.log("connectd to db");
}).catch((err) => {
    console.log(err);
})


async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await listing.deleteMany({});
    await listing.insertMany(initdata.data);
    console.log("data was initalized");
}

initDB();
