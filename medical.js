var express = require ('express');
var router = express.Router();
var db = require.main.require ('./db_medical');
var bodyPaser = require ('body-parser');

router.get('/',function(req,res){
    db.medicalinfo(function(err,result){
        console.log(result);
        res.render('index.handlebars',{list :result});
    })
    
});

router.get('/personal',function(req,res){
res.render('index.handlebars');
});

router.post('/personal',function(req,res){

    db.services(req.body.patient_name,req.body.patient_surname,req.body.date_of_birth,req.body.gender,req.body.race,req.body.address_1,req.body.address_2,req.body.city,req.body.province,req.body.postal_code,req.body.cell_no,req.body.tell_no,req.body.email,req.body.medical,req.body.agree,function(err,result){
        res.redirect('/appointment');
    });
    
    
});


module.exports = router;