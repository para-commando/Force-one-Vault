const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.get('/aa', (req, res) => {
  // console.log('🚀 ~ app.post ~ req.form:', req);
  res.send('Hello World!');
});

app.post('/dd', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"123"}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
