const express = require('express');
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());
app.post("/Signup", async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    try{
        const {email, password, age} = req.body;
        if(!email || !password || !age){
            return res.status(400).send("Email, Password and Age are mandatory fields");
        }
        if(password.length < 8){
            res.status(400).send("Password must be at least 8 characters long");
        }
        if(age < 18){
            res.status(400).send("You must be at least 18 years old to sign up");
        }
        await user.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        console.error("Error creating user:", error);
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

app.patch("/user/:id", async (req, res) => {
    const userid = req.params?.id;
    const updateData = req.body;
    try {
        const ALLOWED_UPDATES = ["age", "gender", "address", "skills"];
        const isupdateallowed = Object.keys(updateData).every((k)=>ALLOWED_UPDATES.includes(k));
        if(!isupdateallowed){
            throw new Error ("Update Not Allowed")
        }
        if(updateData.skills?.length > 10){
            throw new Error ("Max 10 skills are allowed.")
        }
        if(updateData.age < 18){
            throw new Error ("You must cross 18 to get PAN CARD")
        }
        await User.findByIdAndUpdate({_id: userid}, updateData, {runValidators: true});
        res.status(200).send("User updated successfully ");
    }
    catch (error) {
        res.status(500).send("Error Updating User" + " : " + error.message);
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

