const express = require('express');
const app = express();

app.set('views', './src');
app.set('view engine', 'hbs');

app.get('/test/old/:WPID', (req, res) => {
  res.send(`Testing old pathway ${req.params.WPID}`);
});

app.get('/test/new/:WPID', (req, res) => {
  res.render('test-new', { WPID: req.params.WPID });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
