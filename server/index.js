const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
let database = [];
app.get('/getAllCreds', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  res.send(`{"data":"getAllCreds"}`);
});

app.post('/updateCredCellOne', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  const index = database.findIndex((cred) => cred.mainId === req.body.mainId);
  console.log('🚀 ~ index:', index);
  if (index !== -1) {
    database[index].source = req.body.source;
  }
  console.log('🚀 ~ app.post ~ database:', database);

  res.send(`{"data":"updateCredCellOne"}`);
});
app.post('/updateCredCellTwo', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  const index = database.findIndex((cred) => cred.mainId === req.body.mainId);
  console.log('🚀 ~ index:', index);
  if (index !== -1) {
    database[index].uniqueCredId = req.body.uniqueCredId;
  }
  console.log('🚀 ~ app.post ~ database:', database);

  res.send(`{"data":"updateCredCellTwo"}`);
});
app.post('/updateCredCellThree', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  const index = database.findIndex((cred) => cred.mainId === req.body.mainId);
  console.log('🚀 ~ index:', index);
  if (index !== -1) {
    database[index].credential = req.body.credential;
  }
  console.log('🚀 ~ app.post ~ database:', database);

  res.send(`{"data":"updateCredCellThree"}`);
});
app.post('/addNewCred', (req, res) => {
  database.push(req.body);
  console.log('🚀 ~ app.post ~ database:', database);

  res.send(JSON.stringify(database));
});
app.post('/deleteCred', (req, res) => {
  console.log('🚀 ~ app.post ~ req.form:', req.body);
  const newArray = database.filter((cred) => cred.mainId != req.body.mainId);
  database = [...newArray];
  console.log('🚀 ~ app.post ~ database:', database);

  res.send(`{"data":"deleteCred"}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
