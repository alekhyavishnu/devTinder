const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
   "mongodb+srv://alekhya1512:6ohSEGs0syVWNo70@devtinder.aid5t.mongodb.net/devTinder" 
);
};
module.exports = connectDB;



