require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());



// create a model

const Food = require('./models/note');


// set the endpoint
app.get('/', (req,res)=>{
    res.send('<h1>Food Application</h1>');
});

// Fetches all resources
app.get('/api/foodes',(req,res)=>{
    Food.find({},{})
        .then((foodes)=>{
            res.json(foodes);
        });
}); 

// create a new resource
app.post('/api/foodes',(req,res)=>{
    const food = new Food(req.body);

    food.save()
    .then(result =>{
        response.status(201).json({message: 'Food Ceated Successfully'});
    })
})

// fetching single data
app.get('/api/foodes/:id',(req,res)=>{
    const id =req.params.id;

    foodes.findById(id)
      .then((food)=>{
        if(!food) {
            return res.status(404).json({error:'Food not found'});
        }
        res.json(food);
      })
      .catch((error)=>{
        res.status(500).json({error:'internal error'});
      });
});

// deleting single data
app.delete('/api/foodes/:id',(req,res)=>{
    const id =req.params.id;

    foodes.findByIdAndDelete(id)
      .then((deletefood)=>{
        if(!deletefood) {
            return res.status(404).json({error:'Food not found'});
        }
        res.status(204).json({message:"food item deleted"});
      })
      .catch((error)=>{
        res.status(500).json({error:'internal error'});
      });
});

// put the data
app.put('/api/foodes/:id',(req,res)=>{
    const id =req.params.id;
    const foodToPut =res.body;

    foodes.findByIdAndUpdate(id,foodToPut)
      .then((updatefood)=>{
        if(!updatefood) {
            return res.status(404).json({error:'Food not found'});
        }
        res.json(updatefoodfood);
      })
      .catch((error)=>{
        res.status(500).json({error:'internal error'});
      });
});


const port = process.env.port || 3001;
app.listen(port);
console.log(`server runnnng on port${port}`);