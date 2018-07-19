const express = require('express')
const app = express();
app.set("view engine", "ejs");
app.set("views", "views")

app.listen(8080, () => console.log('Your on localhost 8080'))

app.get('/',(req, res) => {
  res.render('index')
})

module.exports = app
