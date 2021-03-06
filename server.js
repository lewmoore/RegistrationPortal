const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
app.set("view engine", "ejs");
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
require('dotenv').config();
mongoose.Promise = global.Promise
let port     = process.env.PORT || 8080;
let mongouser = process.env.USERNAME
let mongopass = process.env.PASSWORD
mongoose.connect('mongodb://'+ mongouser +':'+ mongopass +'@ds127854.mlab.com:27854/stickit')
let UserDetails = require('./model/userDetails')
let sslRedirect = require('heroku-ssl-redirect');
app.use(sslRedirect());

app.listen(port, () => console.log('Your on localhost 8080'))

app.get('/',(req, res) => {
  res.render('index', { req: req })
})

app.post('/', (req, res) => {
    let userDetails = new UserDetails(req.body)

    userDetails.save().then(() => {
      res.render('index', { req: req })
    }).catch(err => {
      res.status(404).render('error')
    })
   })


app.get('/.well-known/acme-challenge/jNk9aikmVaNsV5tmDjs2vRXYezyt4Oa0qQq-N1SfOh0', (req, res) => {
  res.send("jNk9aikmVaNsV5tmDjs2vRXYezyt4Oa0qQq-N1SfOh0.BxYkOGpewqdr1qn_KnBJh52EBHlAlYUYhBp7-OcT0V8")
})

app.get('/about', (req, res) => {
  res.render('about')
})

module.exports = app
