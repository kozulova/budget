const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log("mongo DB is connected")
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;