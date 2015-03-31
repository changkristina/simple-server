// forked
// cloned
// subl .
// npm init
// npm install --save express
//nodemon server.js  ==> opens the server...connects file to browser.
//then open browser

// At the top of our file we declare variables
// for all of the packages we're going to use
// in the file. For this example, we'll only need
// be using a single package called 'express'.
// We `require('express')` and save the results
// in an appropriately named variable.

var express = require('express');

// Next we declare a variable that instantiates
// the express server. Common names for this
// variable include `app` or `server`. We're
// going to call it `app` because that's what
// they do in the express documentation.

var app = express();

// Now that we have an app to build off of,
// we should set up some routes.

// The pattern for setting up routes in express is as follows
// 
// app . HTTP-VERB ( '/ROUTE/PATH/DELIMITED/BY/SLASHES' , function(req,res) { // DO STUFF HERE // });


// Our first route will be `GET /` which will respond
// with "Hello World" for every request that
// comes in to your server.

//This URL: http://localhost:3000/
//is equivalent to the follwoing route...
app.get('/', function(req,res) {

  // Send back the response 'Hello World'

  res.send("URL Calculator");
});

app.get('/hey', function(req,res) {
  res.send("<html><body><h1>Hey! Look at me!</h1><p>I made a server!</p></body></html>")
});

app.get('/hi/:name', function(req, res) {
  res.send("<html><body><h1>Hi, I'm "  + req.params.name + ".</h1></body></html>")
});

app.get('/add/:x/:y', function(req, res) {
  //var x = Number(req.params.x); 
  //var y = Number(req.params.y); 
  //var total = x + y;
  //res.send("The total is: " + total);
  res.send("The total is: " + (Number(req.params.x) + (Number(req.params.y))));
});

app.get('/subtract/:x/:y', function(req, res) {
  //var x = Number(req.params.x); 
  //var y = Number(req.params.y); 
  //var total = x - y;
  //res.send("The total is: " + total);
  res.send("The total is: " + (Number(req.params.x) - (Number(req.params.y))));
});

app.get('/multiply/:x/:y', function(req, res) {
  //var x = Number(req.params.x); 
  //var y = Number(req.params.y); 
  //var total = x * y;
  //res.send("The total is: " + total);
  res.send("The total is: " + (Number(req.params.x) * (Number(req.params.y))));
});

app.get('/divide/:x/:y', function(req, res) {
  //var x = Number(req.params.x); 
  //var y = Number(req.params.y); 
  //var total = x / y;
  //res.send("The total is: " + total);
  res.send("The total is: " + (Number(req.params.x) / (Number(req.params.y))));
});


// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);


// git add
// git commit -m
// git push origin master
