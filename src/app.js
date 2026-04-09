const express = require('express');
const app = express();


// app.use("/", (req,res, next) => {
//     // console.log("api1");
//     res.send("api1");
//     next();
// });

// app.get("/api2", 
//     (req,res,next) => {
//     console.log("api2");
//     // res.send("api2");
//     next();
// }, 
// (req,res,next) => {    
//     console.log("api2-2");
//     // res.send("api2-2");
//     next();
// }, 
// (req,res,next) => {    
//     console.log("api2-3");
//     // res.send("api2-3");
//     next();
// }
// );

// app.use("/hello1",(req, res, next) => {
//     console.log("Step 1");
//     // res.send("Hello World1");
//     next();
// });

// app.get("/hello2", (req, res, next) => {
//     console.log("Step 2");
//     next();
//     // res.send("Hello World2");
// });
app.use((req, res, next) => {
    // res.send("Hello Worldssss");
    console.log("Middleware 0");
    next();
});

// Middleware 1
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2");
    res.send("Hello World from Middleware 2");
    next();
});

// Route

app.listen(3000, () => {
    console.log("server is running on port 3000");
});