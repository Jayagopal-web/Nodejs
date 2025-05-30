const express = require('express');
const app = express();
const bodyParser = require('body-parser') ;
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<center><h1>404 Page Not Found</h1></center>");
});

app.listen(5000);
