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

  let requestedGameState = game.findGameForUser({ gameId: req.query.game_id, userId: req.query.user_id })

  if (!requestedGameState) {
    const result = await getGameRequest({ gameId: req.query.game_id })
    console.log('Got game data.')
    game.setGameData({ id: req.query.game_id, kingdoms: result.kingdoms, territories: result.territories, turn_number: result.turn_number })
    requestedGameState = game.findGameForUser({ gameId: req.query.game_id, userId: req.query.user_id })
  }

  res.json(requestedGameState)
}
app.get('/gameState/', gameState)

const submitTurn = async (req, res) => {
  await waitFor(1000)
  const response = {}
  const allUsersReady = game.addTurnData(req.body)
  if (allUsersReady) {
    const newTurn = game.calculateGameTurn(req.body.game_id)
    await postGameRequest(newTurn)
    response.allUsersReady = true
  }

  // TODO: send players notification and updates
  res.json(response)
}

app.post('/submitTurn', submitTurn)

const playerId = 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5'

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
        const kingdomId = createdGame.kingdoms.find((kingdom) => kingdom.userId === playerId).id
        res0.json(game.procureKingdomSpecificData({ kingdomId, gameData: createdGame }))
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
