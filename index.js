const express = require('express');
const app = express();

const notes =[
    {
    "id":1,
    "name":"siva"
    },
    {
        "id":2,
        "name":"karthik"
     }
];


// set the endpoint
app.get('/', (req,res)=>{
    res.send('<h1>Food Application</h1>');
});

app.get('/api/notes',(req,res)=>{
    res.json(notes);
}); 

const port = 3001;
app.listen(port);
console.log(`server runnnng on port${port}`);