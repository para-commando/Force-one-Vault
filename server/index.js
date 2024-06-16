const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.get('/getAllCreds', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"getAllCreds"}`);
});

app.post('/updateCredCellOne', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"updateCredCellOne"}`);
});
app.post('/updateCredCellTwo', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"updateCredCellTwo"}`);
});
app.post('/updateCredCellThree', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"updateCredCellThree"}`);
});
app.post('/addNewCred', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"addNewCred"}`);
});
app.post('/deleteCred', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"deleteCred"}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
