const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
            maxlength:50,
            minlength:3,
            trim:true
        },
        year:{
            type:Number
        },
        director:String,
        duration:String,
        genre:{
            type:[String]

        },
        rate:{
            type:Number,
            min:0,
            max:10
        }
      }
)


  const Movie = mongoose.model('Movie',movieSchema)


  module.exports = Movie