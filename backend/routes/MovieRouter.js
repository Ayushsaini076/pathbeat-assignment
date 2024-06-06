import express from 'express'
import Movies from '../modals/Movies.js'

const movierouter = express.Router();

movierouter.route('/')
.get(async(req,res)=>{
    try{
        console.log("hi");
        const movies_data = await Movies.find()
        console.log(movies_data)
        res.send(movies_data);
    }
    catch(err){
        console.log(err);
    }
})

export default movierouter