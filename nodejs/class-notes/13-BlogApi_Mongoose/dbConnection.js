const mongoose = require("mongoose")

const dbConnection = () => {
    mongoose.connect()
        .then(() => console.log("****db connected"))
        .catch((err) => console.log("not connected : " + err))
}

export default dbConnection;