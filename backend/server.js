require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080 
const { authorize } = require('./middleware/authMid')
const connectDB = require('./config/db')
connectDB()
app.use(cors())
app.use(express.json())
app.use('/users', authorize, userRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})