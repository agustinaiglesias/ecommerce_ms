const express = require('express');
const app = express();

app.use(express.json());

//STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/cart', (req,res) => {
    res.render('cart')
    return res.status(200)
})

app.get('/sell', (req,res) => {
    res.render('sell')
    return res.status(200)
})



app.listen(8003, ()=> {
    console.log("Shopping up and running on port 8003")
})