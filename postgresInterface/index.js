'use strict'

const express = require('express')
const expressPort = 3002

const bodyParser = require('body-parser')
const requestHandler = require('./request-handler.js')
const validation = require('./validation.js')
const client = require('./pg-client.js')

const app = express()
let server

app.use(bodyParser.json())
app.use(validation)
app.use(express.json())

app.get('/resetDB/', requestHandler.resetDB)
app.post('/newGame/', requestHandler.createNewGame)
app.get('/getGame/', requestHandler.getGame)
app.post('/updateGameTurn/', requestHandler.updateGameTurn)

app.closeServer = () => {
  server.close()
  client.end()
}

app.startServer = () => {
  server = app.listen(expressPort, () => console.log(`Example app listening on port ${expressPort}!`))
  client.connect()
}

app.startServer()

module.exports = app
