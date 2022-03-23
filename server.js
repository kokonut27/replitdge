const express = require('express');
const app = express();
const fs = require("fs");
const https = require('https');


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.redirect('https://github.com/kokonut27/replitdge');
});

app.get('/api', (req, res) => {
  let username = req.query.username;
  let theme = req.query.theme;
  let url = `https://replit.com/@${username}`
  const options = {
    hostname: url,
    method: 'GET'
  }

  const req2 = https.request(options, res2 => {
    if (res2.statusCode != 404) {
      console.log(`${username} username exists!`);
    };
  });

  req2.on('error', error => {
    res.send(`<h1>Something went wrong! Try again later!</h1><h6>${error}</h6>`);
  });
  
  fs.readFile("themes.json", 'utf8', (err, data) => {
    let themes = JSON.parse( data );
    if (themes[theme]) {
      console.log(`${theme} theme exists!`)
    } else {
      res.send('<h1>Something went wrong! Try again later!</h1>');
    }
  });

  res.render('api.ejs', {
    username: username,
    theStats: null,
    grade: "B+"
  });
});

app.listen(8080, () => {
  console.log('replitdge is now running :D');
});