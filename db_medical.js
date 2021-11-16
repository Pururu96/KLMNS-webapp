var mysql = require("mysql");


var express = require("express");
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  port: "3017",
  user: "root",
  password: "mypassword",
  database: "nodemysql",
});

con.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("you are connected");
    //console.log({
      //host            : process.env.MYSQL_HOST,
      //user            : process.env.MYSQL_USER,
      //password        : process.env.MYSQL_SECRET,
     // database        : process.env.MYSQL_DB
   //})
    }
    });


  

module.exports.personal = function (
    patient_name,
    patient_surname,
    date_of_birth,
    gender,
    race,
    address_1,
    address_2,
    city,
    province,
    postal_code,
    cell_no,
    tell_no,
    email,
    medical,
    agree
    
    
    
    
  ) {
    var query =
      "INSERT INTO `personal`(`patient_name`,`patient_surname`, `date_of_birth`, `gender`, `race`, `address_1`, `address_2`, `city`, `province`,`postal_code`,`cell_no`,`tell_no`, `email`,`medical`, `agree`) values ('" +
      patient_name +
      "','" +
      patient_surname +
      "','" +
      date_of_birth +
      "','" +
      gender +
      "','" +
      race +
      "','" +
      address_1 +
      "','" +
      address_2 +
      "','" +
      city +
      "','" +
      province +
      "','" +
      postal_code +
      "','" +
      cell_no +
      "','" +
      tell_no +
      "','" +
      email +
      "','" +
      medical +
      "','" +
      agree +
      "')";
    con.query(query, callback);
    console.log(query);
  };