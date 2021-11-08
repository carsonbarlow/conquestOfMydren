'use strict'

const express = require('express')
const expressPort = 3002

const bodyParser = require('body-parser')

const { Client } = require('pg')
const {
  resetDBTables,
  newGameQuery,
  selectKingdomsWithGameIdQuery,
  selectTerritoriesWithGameIdQuery,
  selectTurnFromGamesQuery,
  updateKingdomsQuery,
  updateTerritoriesQuery,
  updateGameTurnQuery
} = require('./queries')

//= =========== DB Interactions ============\\

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'unsecured',
  database: 'conquest'
})

client.connect()

const resetDB = async () => {
  const returnData = {}

  try {
    await client.query(resetDBTables)
  } catch (error) {
    console.log(error)
    returnData.error = error
  }
}

const createNewGame = async (newGameData) => {
  const returnData = {}
  try {
    await client.query(newGameQuery(newGameData))
    console.log('New game created.')
    returnData.success = true
  } catch (error) {
    console.log(error)
    returnData.error = error
  }
  return returnData
}

const getGame = async (id) => {
  const returnData = { id }
  try {
    let response = await client.query(selectTurnFromGamesQuery({ id }))
    returnData.turn_number = response.rows[0].turn_number
    response = await client.query(selectKingdomsWithGameIdQuery({ id }))
    returnData.kingdoms = response.rows
    response = await client.query(selectTerritoriesWithGameIdQuery({ id }))
    returnData.territories = response.rows
    console.log(`Selected game: ${id}.`)
    returnData.success = true
  } catch (error) {
    console.log(error)
    returnData.error = error
  }
  return returnData
}

const updateGameTurn = async (gameState) => {
  await client.query(updateKingdomsQuery(gameState.kingdoms))
  await client.query(updateTerritoriesQuery(gameState.territories))
  await client.query(updateGameTurnQuery(gameState))
  console.log(`Updated game ${gameState.id} to turn ${gameState.turn_number}`)
  return gameState
}

//= =========== Recieves Data Requests ============\\

const app = express()

app.use(bodyParser.json())
app.use(express.json())

app.get('/resetDB/', async (req, res) => {
  const response = await resetDB()
  res.json(response)
})

app.post('/newGame/', async (req, res) => {
  const response = await createNewGame(req.body)
  res.json(response)
})

app.listen(expressPort, () => console.log(`Example app listening on port ${expressPort}!`))

app.get('/getGame/', async (req, res) => {
  const response = await getGame(req.query.gameId)
  res.json(response)
})

app.post('/updateGameTurn/', async (req, res) => {
  const response = await updateGameTurn(req.body)
  res.json(response)
})
