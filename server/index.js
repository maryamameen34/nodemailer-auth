const express = require("express")
const dotenv = require("dotenv")

// Config ENV
dotenv.config()

const app = express()
const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`)
})