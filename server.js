const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/home', (req, res) => {
  res.sendFile("This is a home page")
})

app.get('/about', (req, res) => {
  res.sendFile("This is an about page.")
})

app.post('/', function(req, res) {
    var number1 = parseInt(req.body.num1);
    var number2 = parseInt(req.body.num2);
    var result = number1 - number2;
    console.log(number1 - number2)
    res.send("<h1>The result of the addition is: </h1>" + result)
  })

app.listen(3000)