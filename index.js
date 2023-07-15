const http = require('http');

const app = http.createServer((req,res)=>{
    res.writeHead(200, {'content-Type':'text/plain'});
    res.end("Hello World");
});

const port = 3001;
app.listen(port);
console.log(`server runnnng on port${port}`);