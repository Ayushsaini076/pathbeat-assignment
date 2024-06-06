import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import http from 'http'
import 'dotenv/config'
import movierouter from './routes/MovieRouter.js'

const app = express();

app.use(cors({
    origin:true,
    credentials:true
}));

app.use("/movies",movierouter);
const url = process.env.MONGODB_URI
const connect = mongoose.connect(url)
.then(()=>{
    console.log('database connected')
})


const port = process.env.PORT;
const hostname = 'localhost';
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})