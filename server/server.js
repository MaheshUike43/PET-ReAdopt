import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/conn.js';
import authRoute from './routes/authUser.js';
import userRoute from './routes/Users.js';
import petRoute from './routes/petRoute.js'
import adoptRequest from './routes/adoptReqRoute.js';
import cors from 'cors';

const app = express();
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use(authRoute)
app.use(userRoute)
app.use(petRoute)
app.use(adoptRequest)

//MongoDB Connection
connectDB()

//PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening to the ${PORT}`)
})
