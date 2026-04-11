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

app.get("/user", async (req, res) => {
    const userage = req.body.age;
    try {
        const users = await User.find({ age: userage });
        if(users.length === 0){
            return res.status(404).send("No users found with the specified age");
        }else{
            res.status(200).send(users);
        }
    }
    catch(err){
        res.status(500).send("Error fetching users");
    }
});

app.get("/feed", (req, res) => {

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

