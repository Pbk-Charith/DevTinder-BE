const express = require('express');
const app = express();


app.get("/user", (req, res,next) => {
    console.log("First response")
    res.send("First response");
        next();
},
(req, res, next) => { 
    console.log("Second response")
    res.send("Second response");
    next();
}
,(req, res,next) => {
    console.log("Third response")
    res.send("Third response");
    next();
},(req, res,next) => {
    console.log("Fourth response")
    res.send("Fourth response");
    next();
},(req, res) => {
    console.log("Fifth response")
    res.send("Fifth response");
}
);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});