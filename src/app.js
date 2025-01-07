const express = require("express");
const app = express();

app.get("/user", (req,res) =>{
//route handler
    console.log(req.query);
    res.send({firstName : "Alekhya", lastName: "Vishnu"});
});
app.get("/user/:user_id/:pwd", (req,res) =>{
    console.log(req.params);
    res.send({firstName : "Alekhya", lastName: "Vishnu"});
});
app.post("/user", (req,res) =>{
    res.send("Data Saved successsfully!")
})
app.use("/test", (req,res) => {
    res.send("Hello from the Server");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});