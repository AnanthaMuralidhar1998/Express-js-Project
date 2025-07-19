var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/about',(req,res)=>{ 
    res.render('about');
})
app.get('/services',(req,res)=>{
    res.render('services');
})
app.get('/contact',(req,res)=>{
    res.render("contact");
}) 
app.get('*',(req,res)=>{
    res.render("pagenotfound");
}) 

app.listen(8080,()=> console.log("server is running"));