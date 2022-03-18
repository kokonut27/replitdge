let express = require('express');
let app = express();
let fs = require("fs");

// https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

app.get('/', (req, res) => {
  res.redirect('https://github.com/kokonut27/replitdge');
});

app.get('/api', (req, res) => {
  fs.readFile("themes.json", 'utf8', (err, data) => {
    res.end(data);
  });
})

app.listen(8080, () => {
  console.log('replitdge is now running :D');
})