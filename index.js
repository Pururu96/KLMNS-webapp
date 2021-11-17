const express = require('express');
const exphbs  = require('express-handlebars');
var db = require ('./db_medical');
// import sqlite modules
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



var ejs= require ('ejs');
var async = require ('async');
//const appointment = require ('./controllers/appointment');

var bodyParser = require ('body-parser');
var medical = require ('./medical.js');




// add more middleware to allow for templating support


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


    
    




//database set up//

open({
	filename: './data.db',
	driver: sqlite3.Database
})

//app.get('/appointment',function(req,res){
    //res.render('index');
//});
//app.get('/press', function(req, res) {
	//res.redirect('sign');
		
	//});


//app.post('/sign', function(req, res) {
	
	//res.redirect('/')
////});




let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});

app.post('/count', function(req, res) {
	counter++;
	res.redirect('/')
});

app.post('/appointment', function(req, res) {

	var {name, email, department, doctor, message} = req.body;
	
	console.log(name);
	
	res.redirect('/')


});




// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});