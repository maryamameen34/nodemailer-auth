const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()


exports.connectDB = async () => {
    try {
        const con = mongoose.connect(process.env.MONGODB_CLOUD)
        if(con){
            console.log("server connected with db ")
        }
    } catch (error) {
        console.log("error connecting with database " + error.message)
    }
}