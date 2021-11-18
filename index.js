const express = require('express');
const exphbs  = require('express-handlebars');

// import sqlite modules

const app = express();
// const TeachableMachine = require("@sashido/teachablemachine-node");
const PORT =  process.env.PORT || 3000;

// const model = new TeachableMachine({
// 	modelUrl: "https://teachablemachine.withgoogle.com/models/mS8IUBmbP/"
//   });

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');






var bodyParser = require ('body-parser');





// add more middleware to allow for templating support


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


    
    




//database set up//




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
// app.get("/image/classify", async (req, res) => {
//   const { url } = req.query;

//   return model.classify({
//     imageUrl: url,
//   }).then((predictions) => {
//     console.log(predictions);
//     return res.json(predictions);
//   }).catch((e) => {
//     console.error(e);
//     res.status(500).send("Something went wrong!")
//   });
// });


//app.post('/appointment', function(req, res) {

	//var {name, email, department, doctor, message} = req.body;
	
	//console.log(name);
	
	//res.redirect('/')


//});




// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});