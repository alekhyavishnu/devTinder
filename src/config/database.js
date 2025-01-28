const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
   "mongodb+srv://alekhya1512:Netflix@1999@devtinder.aid5t.mongodb.net/devTinder" 
);
};
module.exports = connectDB;



