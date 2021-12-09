'use strict'

const express = require('express')
const expressPort = 3002

const bodyParser = require('body-parser')
const requestHandler = require('./request-handler.js')

const app = express()

app.use(bodyParser.json())
app.use(express.json())

app.get('/resetDB/', requestHandler.resetDB)
app.post('/newGame/', requestHandler.createNewGame)
app.get('/getGame/', requestHandler.getGame)
app.post('/updateGameTurn/', requestHandler.updateGameTurn)

app.listen(expressPort, () => console.log(`Example app listening on port ${expressPort}!`))
