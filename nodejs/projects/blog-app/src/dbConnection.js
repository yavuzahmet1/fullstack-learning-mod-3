"use strict"

const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('✅ Database Connected Successfully'))
        .catch((err) => console.log("❌ Database Connection Error:", err.message));
};

module.exports = dbConnection;