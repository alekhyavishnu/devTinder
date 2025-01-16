const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.post("/signup", async (req,res) =>{
    const user = new User({
        firstName: "Tarun",
        lastName: "Thota",
        emailID: "tarun@gmail.com",
        password: "uhd38yh",
        age: 29,
        gender: "Male"
    });
await user.save();
res.send("User Added Successfully")
});



connectDB().then(() =>{
    console.log("Database connected successfully");
    app.listen(3000, () => {
        console.log("Server is successfully listening on port 3000");
    });
}).catch(err =>{
console.error("Database cannot be conneted")
});

