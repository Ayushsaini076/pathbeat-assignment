import mongoose, { Mongoose } from "mongoose";
const {Schema}=mongoose

const MoviesSchema = Schema({
    "name":String,
    "url":String,
    "desc":String,
    "detail":String
})

const Movies = mongoose.model('movies',MoviesSchema);

export default Movies