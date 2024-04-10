const UserRoutes = require('./Routes/User.routes')


const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())

app.use('/api/v1/users', UserRoutes)



const connectWithRetry = () =>
{
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => { app.listen(process.env.PORT, (e) => console.log('Server listening on port', process.env.PORT)) })
        .catch((error) => { setTimeout(connectWithRetry, 2000) });
};
// Initial connection attempt
connectWithRetry();