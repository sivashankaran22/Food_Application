const mongoose = require('mongoose');

const url =process.env.MONGODB_URI;

mongoose.set('strictQuery', false);

// connect to the database
mongoose.connect(url)
  .then(result=>{
    console.log('connect to mongodb database');
  })
  .catch((error)=>{
    console.log('Error connectng MongoDB:',error.message);
  });

// create a schema

const foodSchema=new mongoose.Schema({
    content:String,
    important:Boolean,
    timestamp:{
        type: Date,
        default : Date.now
    }
});

foodSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports =mongoose.model("Food",foodSchema);