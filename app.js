const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ser = require('./server');
const prodList = []
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.get('/getProds',ser.getProds);
app.post('/postProds', jsonParser, ser.postProds);

app.listen(port,()=>console.log('App is running at port : ',port));