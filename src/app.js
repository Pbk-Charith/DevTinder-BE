const express = require('express');
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/Signup", async (req, res) => {
    const user = new User({
        firstName: "Sai Charith",
        lastName: "Puttabakula",
        email: "pbcharith01@gmail.com",
        password: "CHARith@123",
        age: 22,
        gender: "Male"
    });
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

