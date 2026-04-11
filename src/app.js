const express = require('express');
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());
app.post("/Signup", async (req, res) => {

    console.log(req.body);
    
    const user = new User(req.body);
    try{
        await user.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(500).send("Error creating user");
    }
    
});

connectDB().then(() => {
    console.log("Connected to MongoDB...");
    app.listen(3000, () => {
    console.log("server is running on port 3000");
});
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

