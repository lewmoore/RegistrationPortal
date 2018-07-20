const express = require('express')
const app = express();
app.set("view engine", "ejs");
app.set("views", "views")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/userDetails')
let UserDetails = require('./model/userDetails')



app.listen(8080, () => console.log('Your on localhost 8080'))

app.get('/',(req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
 let userDetails = new UserDetails(req.body)

 userDetails.save().then(() => {
   res.render('index')
 }).catch(err => {
   res.status(400).send("Not Saved")
 })
})

module.exports = app
