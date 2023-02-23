const express = require('express');
const app = express();

//const connectDB = require('./src/database/connection');
const { CreateChannel } = require('./src/utils');

app.use(express.json());

//connectDB();

//const channel = await CreateChannel()

//STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req,res) => {
    res.render('index')
    return res.status(200)
})

app.get('/principal', (req,res) => {
    res.render('principal')
    return res.status(200)
})

app.get('/categories', (req,res) => {
    res.render('categories')
    return res.status(200)
})

app.get('/products', (req,res) => {
    res.render('products')
    return res.status(200)
})

app.get('/product-info', (req,res) => {
    res.render('product-info')
    return res.status(200)
})

app.listen(8002, ()=> {
    console.log("Products up and running on port 8002")
})