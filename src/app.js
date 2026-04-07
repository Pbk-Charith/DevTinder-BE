const express = require('express');
const app = express();


app.get("/user/:id/:name/:age/:email", (req, res) => {
    console.log(req.params);
    res.send("Hello World");
});

app.post('/data', (req, res) => {
    res.send("Data received");
});

app.put('/update', (req, res) => {
    res.send("Data updated");
});

app.delete('/delete', (req, res) => {
    res.send("Data deleted");
});

app.get("/hello", (req, res) => {
    res.send({Firstname: "Sai Charith", Lastname: "puttabakula"});
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});