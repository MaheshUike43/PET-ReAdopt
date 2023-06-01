import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/conn.js';
import authroute from './routes/authUser.js';
import petRoute from './routes/petRoute.js'
import Request from './routes/adoptReqRoute.js';
import cors from 'cors';
import userroute from './routes/Users.js';

const app = express();
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use(authroute)
app.use(userroute)
app.use(petRoute)
app.use(Request)

//MongoDB Connection
connectDB()

//PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening to the ${PORT}`)
})
