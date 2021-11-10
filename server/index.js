'use strict'

const game = require('./game')
const express = require('express')
const superagent = require('superagent')
const path = require('path')
const corsMiddleware = require('./cors.js')
const bodyParser = require('body-parser')
const app = express()
const expressPort = 3001

app.use(corsMiddleware)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.send(game.message)
})

const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay))

const getGameRequest = async ({ gameId }) => {
  return new Promise((resolve, reject) => {
    superagent
      .get('http://localhost:3002/getGame/')
      .query({ gameId })
      .then(result => {
        if (!result.error) {
          console.log('gameState Success!')
        }
        resolve(result.body)
      })
  })
}

const postGameRequest = async (gameState) => {
  return new Promise((resolve, reject) => {
    superagent
      .post('http://localhost:3002/updateGameTurn')
      .send(gameState)
      .set('accept', 'json')
      .end((err, res) => {
        if (!err) {
          console.log('DB Updated.')
          resolve(res)
        } else {
          resolve({ err, body: res.body })
        }
      })
  })
}

const gameState = async (req, res) => {
  await waitFor(1000)

  let requestedGameState = game.findGameForUser({ gameId: req.query.gameId, userId: req.query.userId })

  if (!requestedGameState) {
    const result = await getGameRequest({ gameId: req.query.gameId })
    console.log('Got game data from DB.')
    game.setGameData({ id: req.query.gameId, kingdoms: result.kingdoms, territories: result.territories, turnNumber: result.turnNumber })
    requestedGameState = game.findGameForUser({ gameId: req.query.gameId, userId: req.query.userId })
  }

  res.json(requestedGameState)
}
app.get('/gameState/', gameState)

const submitTurn = async (req, res) => {
  await waitFor(1000)
  const response = {}
  const allUsersReady = game.addTurnData(req.body)
  if (allUsersReady) {
    const newTurn = game.calculateGameTurn(req.body.gameId)
    await postGameRequest(newTurn)
    response.allUsersReady = true
  }

  // TODO: send players notification and updates
  res.json(response)
}

app.post('/submitTurn', submitTurn)

const newGame = async (req, res0) => {
  await waitFor(1000)
  const createdGame = game.createGame()

  await superagent
    .post('http://localhost:3002/newGame')
    .send(createdGame)
    .set('accept', 'json')
    .end((err, res1) => {
      if (!err) {
        console.log('New game created.')
        console.log(createdGame.id)
        res0.json({ gameId: createdGame.id })
      } else {
        res0.json({ err, body: res1.body })
      }
    })
}

app.post('/newGame', newGame)

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

app.listen(expressPort, () => console.log(`Example app listening on port ${expressPort}!`))
