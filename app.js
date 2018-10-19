const express = require('express')
const path = require('path');

const app  = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.htm'))
})
app.use('/', express.static('public'))

app.listen(port, () => console.log(`Hello World`))
