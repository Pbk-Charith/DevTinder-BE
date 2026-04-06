const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send("Hello Worldsssssssssssssssssssssssssssssssssssssss charith!");
});

app.use("/hello", (req, res) => {
    res.send("This is the API endpoint.");
});


app.listen(3000, () => {
    console.log("server is running on port 3000");
});