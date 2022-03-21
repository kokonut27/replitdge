let express = require('express');
let app = express();
let fs = require("fs");


app.get('/', (req, res) => {
  res.redirect('https://github.com/kokonut27/replitdge');
});

app.get('/api', (req, res) => {
  let username = req.query.username;
  let theme = req.query.theme;
  
  fs.readFile("themes.json", 'utf8', (err, data) => {
    if (theme.includes(theme)) {
      console.log(`${theme} theme exists!`)
    } else {
      res.send('<h1>Something went wrong! Try again later!</h1>');
    }
  });
})

app.listen(8080, () => {
  console.log('replitdge is now running :D');
})