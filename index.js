const express = require('express');
const exphbs  = require('express-handlebars');
var bodyParser = require ('body-parser');
//const path = require('path');
//const router = require('./routes');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
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
//app.use(express.static(path.join(__dirname, '/public')));
// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//app.use('/', router)






// add more middleware to allow for templating support


//app.use(express.static('./public'));
//app.use(bodyParser.urlencoded({extended : true}));



    
    




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
//app.get('/', function(req, res) {
	//res.render('index', {
	
	//});
//});
//app.get('/personal', function (req, res){
	//res.render('personal', {qs: req.query});

//});
//app.post('/personal', urlencodedParser, function (req, res){
	//console.log(req.body);
	//res.render('personal', {qs: req.body});

//});
//app.get('/', function(req, resp) {
	//resp.sendFile('index.html', {root: Path.join(__dirname, '/personal')})
//});
//app.post('/', function(req, resp) {
	//resp.end(JSON.stringify(req.body));
//})
//app.get('/', function(req, res, next) {
	//res.render('index', { title: 'Cool, huh!', condition: false });
  //});
//app.get('/personal', function(req, res, next) {
	//res.send('respond with a resource');
  //});

  
//app.post('/personal', function(req, res, next) {
	//res.redirect('/');
  //});

//app.get('/personal', (req, res,) => {
	//res.render('index', {

	//});
	
//});
//app.post('/personal', (req, res,) => {
	//console.log(req.body);
	
//});

//let counter = 0;

//app.get('/', function(req, res) {
	//res.render('index', {
	//counter
//	});
//});

//app.post('/count', function(req, res) {
	//counter++;
	//res.redirect('/')
//});
//app.get('/', function(req, res) {
	//res.render('index');
//});
app.get('/contact', function(req, res) {
	res.render('contact')
})
app.get('/', (request, response) => {
	response.send('index');
  });
  let symptoms = [
	//{
		//"id": 1,
	  //"firstname": "Nathasha",
	 // "lastname" : "Pearson",
	  
    //"date_of_birth": "1986/02/16",
   // "gender": "female",
   // "race": "coloured",
   // "address": "234 Melville Kempton Park",
    
   // "city": "Johannesburg",
   // "province": "Gauteng",
   // "postal_code": "1456",
   // "cell_no": "0569762526",
    
    //"email": "nathasha@instance.com",
    
    //"agree":"yes"
	//},
	{
		
	 
	  "severe cough": "yes", 
	  
	  "shaking": "yes",
	  "headache":"yes",
	  "fever": "yes",
	  "loss of appetite": "yes",
	  "nausea": "yes"
	  
	}
	
  ];
  
  app.get('/symptoms', (request, response) => {
	  //res.send('index' + req.params.accounts)
	response.json(symptoms);
  });
  
  app.get('/symptoms/:id', (request, response) => {
	const accountId = Number(request.params.id);
	const getAccount = symptoms.find((account) => account.id === accountId);
  
	if (!getAccount) {
	  response.status(500).send('Account not found.')
	} else {
	  response.json(getAccount);
	}
  });
app.post('/symptoms', (request, response) => {
	const incomingAccount = request.body;
  
	symptoms.push(incomingAccount);
  
	response.json(symptoms);
	
  })


//app.get('/personal', function (req, res) {  
	//res.send('<p>Username: ' + req.query['patient_name']+'</p><p>Lastname: '+req.query['patient_surname']+'</p>');  
	//})  
//app.get('/index.html', function (req, res) {  
	//res.sendFile( __dirname + "/" + "index.html" );  
 //})  
 //app.post('/personal', urlencodedParser, function (req, res) {  
	// Prepare output in JSON format  
	//response = {  
		//patient_name:req.body.patient_name,  
		//patient_surname:req.body.patient_surname  
	//};  
	//console.log(response);  
	//res.end(JSON.stringify(response));  
 //}) 
//app.post("/personal", function (req, res) {
    //var username = req.body.username
    //var password = req.body.password
    //User.register(new User({ username: username }),
           // password, function (err, user) {
        //if (err) {
           // console.log(err);
           // return res.render("personal");
       // }
 
        //passport.authenticate("local")(
           // req, res, function () {
            //res.render("secret");
        //});
   // });
//});


	//req.collection.find({})
	  //.toArray()
	  //.then(results => res.json(results))
	  //.catch(error => res.send(error));
  //});
  
  //app.post('/personal', (req, res, next) => {
	//const { appointmentDate, name, email } = req.body;
	//if (!appointmentDate || !name || !email) {
	  //return res.status(400).json({
		//message: 'Appointment Date, Name and email are required',
	 // });
	//}
	//const payload = { appointmentDate, name, email };
  //req.collection.insertOne(payload)
    //.then(result => res.json(result.ops[0]))
    //.catch(error => res.send(error));
//});
//app.post('/appointment', function(req, res) {

	//var {name, email, department, doctor, message} = req.body;
	
	//console.log(name);
	
	//res.redirect('/')


//});




// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});