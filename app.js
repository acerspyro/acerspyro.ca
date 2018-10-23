const express = require('express')
const path    = require('path')
const https   = require('https')

const app = express()

const config = {
	port: '443'
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.htm'))
})
app.use('/', express.static('public'))

app.listen(config.port)
