require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080 
const connectDB = require('./config/db')
connectDB()
app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})