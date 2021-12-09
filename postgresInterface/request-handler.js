'use strict'

const client = require('./pg-client.js')
const queries = require('./queries')

const utilities = require('./utilities')

const resetDB = async (req, res) => {
  const returnData = {}

  try {
    await client.query(queries.resetDBTables)
  } catch (error) {
    console.log(error)
    returnData.error = error
  }
  res.json(returnData)
}

const createNewGame = async (req, res) => {
  const newGameData = req.body
  const returnData = {}
  try {
    await client.query(queries.newGame(newGameData))
    console.log('New game created.')
    returnData.success = true
  } catch (error) {
    console.log(error)
    returnData.error = error
  }
  res.json(returnData)
}

const getGame = async (req, res) => {
  const id = req.query.gameId
  const returnData = { id }
  try {
    let response = await client.query(queries.selectTurnFromGames({ id }))
    returnData.turnNumber = response.rows[0].turn_number
    response = await client.query(queries.selectKingdomsWithGameId({ id }))
    returnData.kingdoms = utilities.convertVariableNames.kingdomsToCammelCase(response.rows)
    response = await client.query(queries.selectTerritoriesWithGameId({ id }))
    returnData.territories = utilities.convertVariableNames.territoriesToCammelCase(response.rows)
    console.log(`Selected game: ${id}.`)
    returnData.success = true
  } catch (error) {
    console.log(error)
    returnData.error = error
  }

  res.json(returnData)
}

const updateGameTurn = async (req, res) => {
  const gameState = req.body
  try {
    await client.query(queries.updateKingdoms(gameState.kingdoms))
    await client.query(queries.updateTerritories(gameState.territories))
    await client.query(queries.updateGameTurn(gameState))
    console.log(`Updated game ${gameState.id} to turn ${gameState.turnNumber}`)
  } catch (error) {
    console.log(error)
    gameState.error = error
  }

  res.json(gameState)
}

const requestHandler = {
  resetDB,
  createNewGame,
  getGame,
  updateGameTurn
}

module.exports = requestHandler
