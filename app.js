const express=require('express');
var app=express();
const hbs=require('hbs');
const fs=require('fs');
app.set('view engine','hbs');

// app.use((req,res,next)=>{
    
//     res.render('maintaince.hbs');
// });
app.use((req,res,next)=>{
    var now=new Date().toString();
    var log=`Time:${now},Method:${req.method},Url:${req.url}`;
    fs.appendFile('server.log',log+ '\n',(err)=>{if(err){console.log('error');}});
    console.log(`Time:${now},Method:${req.method},Url:${req.url}`);
    next();
});

hbs.registerPartials(__dirname+ "/views/partials");



app.get('/',(req,res)=>{
    res.render('index.hbs',{
        name:'Home',
        now:new Date().getFullYear()
    });
});
app.get('/about',(req,res)=>{
    res.render('index.hbs',{
        name:'about',
        now:new Date().getFullYear()
    });
});
app.listen(3000);