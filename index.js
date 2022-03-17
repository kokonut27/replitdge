let express = require('express');
let app = express();
let fs = require("fs");

app.get('/', function (req, res) {
  res.redirect('https://github.com/kokonut27/replitdge')
})

app.get('/api', function (req, res) {
  fs.readFile("themes.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

let server = app.listen(8080, function () {
  console.log('replitdge is now running :D');
})