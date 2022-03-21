const express = require('express');
const app = express();
const fs = require("fs");
const https = require('https');
import ReplAPI from 'replapi-it';
const replapi = ReplAPI({
  username: 'JBloves27'
});

/*
const myUser = new replapi.User("RayhanADev");

async function getCycles() {
  let info = await myUser.userGraphQLDataFull();
  let cycles = info.karma; // Yep, it's karma!
  console.log(`User Cycles: ${cycles}`)
}

getCycles()
*/

app.use(express.static(__dirname + '/public'));


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
    res.send('<h1>Something went wrong! Try again later!</h1>');
  });
  
  fs.readFile("themes.json", 'utf8', (err, data) => {
    let themes = JSON.parse( data );
    if (themes[theme]) {
      console.log(`${theme} theme exists!`)
    } else {
      res.send('<h1>Something went wrong! Try again later!</h1>');
    }
  });

  res.render('api/api.ejs', {
    username: null,
    theStats: null
  });
});

app.listen(8080, () => {
  console.log('replitdge is now running :D');
})