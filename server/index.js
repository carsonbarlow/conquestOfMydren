'use strict'

const gameManager = require('./game-manager.js')
const express = require('express')
const path = require('path')
const corsMiddleware = require('./cors.js')
const bodyParser = require('body-parser')
const app = express()
const expressPort = 3001

const requestHandler = require('./request-handler.js')

app.use(corsMiddleware)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.send(gameManager.message)
})

app.get('/gameState/', requestHandler.gameState)
app.post('/submitTurn', requestHandler.submitTurn)
app.post('/newGame', requestHandler.newGame)

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

app.listen(expressPort, () => console.log(`Example app listening on port ${expressPort}!`))
