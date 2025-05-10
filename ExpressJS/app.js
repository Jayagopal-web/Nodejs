const http = require('http');
const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("First Middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("Second Middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("Third Middleware");
    res.send('<h1>Hello from ExpressJS!</h1>');
})
const server = http.createServer(app);
server.listen(5000);
