const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
   "mongodb+srv://alekhya1512:6ohSEGs0syVWNo70@devtinder.aid5t.mongodb.net/devTinder" 
);
};
connectDB().then(() =>{
    console.log("Database connected successfully")
}).catch(err =>{
console.error("Database cannot be conneted")
})
