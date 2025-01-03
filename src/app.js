const express = require("express");
const app = express();

app.get("/user", (req,res) =>{
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