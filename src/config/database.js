const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://pbcharith01:CHARith2001@namastenode.nt8qzct.mongodb.net/");
};

module.exports = connectDB;

