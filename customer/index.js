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

app.get('/my-profile', (req,res) => {
    res.render('my-profile')
    return res.status(200)
})

app.listen(8001, ()=> {
    console.log("Costumer up and running on port 8001")
})