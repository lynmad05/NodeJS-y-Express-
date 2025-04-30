var express = require('express');
var app = express();
var rutas = require ('./rutas/rutas.js');
var bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', rutas);
app.set('view engine', 'ejs');
function c_server(){
    console.log('Listening on port 3000');
}

var server= app.listen(3000, c_server);