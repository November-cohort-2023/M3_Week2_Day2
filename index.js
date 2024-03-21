
const express = require('express')


const app = express()


const mongoose = require('mongoose')

const Movie = require('./models/Movie.model');



mongoose
  .connect("mongodb://127.0.0.1:27017/imdb")
  .then(res => console.log(`Connected to Mongo! Database name: "${res.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));





// CRUD



// READ:

// READ: getting all movies

app.get('/movies',(req,res)=>{

    Movie.find()
    .then((allMovies)=>{
        res.json(allMovies)
    })
    .catch(err=>{
        console.log(err)
    })
})








app.listen(5005)