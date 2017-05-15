const express = require('express');
const app = express();

app.set('views', './src');
app.set('view engine', 'hbs');

app.use('/newPvjs', express.static(`./node_modules/@wikipathways/pvjs/dist/`));

app.get('/test/old/:WPID', (req, res) => {
  res.render('test-old', { WPID: req.params.WPID });
});

app.get('/test/new/:WPID', (req, res) => {
  res.render('test-new', { WPID: req.params.WPID });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
