const express = require('express')
const app = express();
app.set("view engine", "ejs");
app.set("views", "views")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
require('dotenv').config();
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let port     = process.env.PORT || 8080;
let mongouser = process.env.USERNAME
let mongopass = process.env.PASSWORD
mongoose.connect('mongodb://'+ mongouser +':'+ mongopass +'@ds127854.mlab.com:27854/stickit')
let UserDetails = require('./model/userDetails')



app.listen(port, () => console.log('Your on localhost 8080'))

app.get('/',(req, res) => {
  res.render('index', { req: req })
})

app.post('/', (req, res) => {
 let userDetails = new UserDetails(req.body)

 userDetails.save().then(() => {
   res.render('index', { req: req })
 }).catch(err => {
   res.status(400).send("Not Saved")
 })
})

module.exports = app
