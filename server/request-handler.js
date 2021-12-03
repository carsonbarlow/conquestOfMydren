'use strict'

const config = require('config').config
const gameManager = require('./game-manager.js')
const superagent = require('superagent')

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
  await waitFor(config.simulatedLatency)

  let requestedGameState = gameManager.findGameForUser({ gameId: req.query.gameId, userId: req.query.userId })

  if (!requestedGameState) {
    const result = await requestHandler.getGameRequest({ gameId: req.query.gameId })
    console.log('Got game data from DB.')
    gameManager.setGameData({ id: req.query.gameId, kingdoms: result.kingdoms, territories: result.territories, turnNumber: result.turnNumber })
    requestedGameState = gameManager.findGameForUser({ gameId: req.query.gameId, userId: req.query.userId })
  }

  res.json(requestedGameState)
}

const submitTurn = async (req, res) => {
  await waitFor(config.simulatedLatency)
  const response = {}
  const allUsersReady = gameManager.addTurnData(req.body)
  if (allUsersReady) {
    const newTurn = gameManager.calculateGameTurn(req.body.gameId)
    await requestHandler.postGameRequest(newTurn)
    response.allUsersReady = true
  }

  // TODO: send players notification and updates
  res.json(response)
}

const newGame = async (req, res0) => {
  await waitFor(config.simulatedLatency)
  const createdGame = gameManager.createGame()

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

const requestHandler = {
  getGameRequest,
  postGameRequest,
  gameState,
  submitTurn,
  newGame
}

module.exports = requestHandler
