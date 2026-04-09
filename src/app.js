const express = require('express');
const app = express();

const { adminAuth, UserAuth }= require('./Middlewares/auth');

app.use("/admin", adminAuth);

app.use("/user/login", (req,res) => {
    console.log("This is the user login route");
    res.send("This is the user login data");
});

app.use("/user", UserAuth ,(req,res, next) => {
    console.log("This is the user route");
    res.send("This is the user data");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("This is the admin data");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("User deleted successfully");
});

app.get("/admin/UpdateUser", (req, res) => {
    res.send("User updated successfully");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});