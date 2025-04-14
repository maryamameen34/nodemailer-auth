const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./config/db_connect")

// Config ENV
dotenv.config()

const app = express()
const port = process.env.PORT || 9000

app.use("/" , (req , res) => {
    res.json({
        message : "Authentication Using Nodemailer backend"
    })
})

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`)
    connectDB()
})