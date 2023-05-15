const mongoose = require('mongoose');
// const mongostr = "mongodb+srv://gauravshresth2000:HFFgcpWDYP1p3uuH@cluster0.1iqgzmn.mongodb.net/vct?retryWrites=true&w=majority";
// const mongostr = "mongodb://127.0.0.1:27017/my_db";
const mongoosedb = "mongodb://127.0.0.1:27017/test2"

mongoose.set("strictQuery", false);

const connectToMongo = () => {
    mongoose.connect(mongoosedb, () => {
        console.log("MongoDB connection Successfull");
    })
}

module.exports = connectToMongo;
