const express = require('express');
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());
app.post("/Signup", async (req, res) => {

    // console.log(req.body);
    
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
        const user = await User.findOne({ age: 52 });

        if (!user) {
            return res.status(404).send("No users found with the specified age");
        }

        res.status(200).send(user);
    } catch (err) {
        res.status(500).send("Error fetching users");
    }

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

app.get("/feed", async (req, res) => {

    try {
        const users = await User.find();
        res.status(200).send(users);
    }
    catch(err){
        res.status(500).send("Error fetching users");
    }

});

app.delete("/user", async (req, res) => {
    const userid = req.body.id;
    try{
        const user = await User.findByIdAndDelete(userid);
        if(!user){
            return res.status(404).send("User not found");
        }
        res.status(200).send("User deleted successfully");
    } catch (error) {
        res.status(500).send("Error deleting user");
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

