const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000

app.get('/', (req, res) => {
    console.log('ooooo');
    
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})