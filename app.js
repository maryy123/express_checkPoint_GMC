var express = require('express');
var path = require('path');
var access= require('./Middleware/access')

const app=express()
app.use(access)
app.use(express.static(path.join(__dirname,"/public")))




// using pug **************
// app.set('view engine', 'pug');
// app.set("views","./views")

// app.get('/index', function(req, res){
//   res.render('index');
// });

// app.get('/contact', function(req, res){
//   res.render('contact');
// });

// app.get('/services', function(req, res){
//   res.render('services');
// });
// *************************


const port=8000
app.listen(port,()=>console.log(`server is running on port ${port}`))


