const express = require('express')


const app = new express()

const ejs = require('ejs')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/post',(req,res)=>{
    res.render('post');
})
app.get('/post',(req,res)=>{
    res.render('post');
})




app.listen(3000)