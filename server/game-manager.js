'use strict'

const cloneDeep = require('clone-deep')

const { gameStart } = require('./config/game-start.js')
const turnCalculator = require('./turn-calculator.js')

let matches = {}

const gameManager = () => {
  const getMatches = () => {
    return cloneDeep(matches)
  }

  const removeMatches = () => {
    matches = {}
  }

  const createGame = () => {
    const newGame = gameStart()
    matches[newGame.id] = cloneDeep(newGame)
    return matches[newGame.id]
  }

  const setGameData = (data) => {
    const gameData = cloneDeep(data)

    matches[gameData.id] = {
      id: gameData.id,
      kingdoms: gameData.kingdoms,
      territories: gameData.territories,
      turnNumber: gameData.turnNumber
    }
  }

  const findGameForUser = ({ gameId, userId }) => {
    const gameData = matches[gameId]
    // console.log('gameData: ', gameData)
    if (!gameData) {
      return null
    }

    const kingdomId = gameData.kingdoms.find(kingdom => kingdom.userId === userId).id
    return {
      id: gameId,
      kingdom: gameData.kingdoms.find(kingdom => kingdom.userId === userId),
      territories: gameData.territories.map(territory => {
        const filteredTerritory = {}
        filteredTerritory.id = territory.id
        filteredTerritory.kingdomId = territory.kingdomId
        filteredTerritory.position = territory.position
        filteredTerritory.statId = territory.statId
        if (territory.kingdomId === kingdomId) {
          filteredTerritory.armyId = territory.armyId
          filteredTerritory.buildings = territory.buildings
        }
        return filteredTerritory
      }),
      turnNumber: gameData.turnNumber
    }
  }

  const addTurnData = (data) => {
    matches[data.gameId].kingdoms.find(kingdom => kingdom.id === data.kingdomId).orders = { ...data }

    const unreadyUser = matches[data.gameId].kingdoms.find(kingdom => kingdom.orders === undefined)

    return !unreadyUser
  }

  const calculateGameTurn = (id) => {
    const newGameState = turnCalculator.calculateTurn(matches[id])
    matches[id] = newGameState
    return newGameState
  }

  const procureKingdomSpecificData = ({ kingdomId, gameData }) => {
    const returnData = {
      id: gameData.id,
      turnNumber: gameData.turnNumber
    }
    returnData.kingdom = gameData.kingdoms.find((kingdom) => kingdom.id === kingdomId)
    returnData.territories = gameData.territories.map(territory => {
      const filteredTerritory = {}
      filteredTerritory.id = territory.id
      filteredTerritory.kingdomId = territory.kingdomId
      filteredTerritory.position = territory.position
      filteredTerritory.statId = territory.statId
      if (territory.kingdomId === kingdomId) {
        filteredTerritory.armyId = territory.armyId
        filteredTerritory.buildings = territory.buildings
      }
      return filteredTerritory
    })
    return returnData
  }

  const message = 'Hello from Game 0.0.1!'

  return {
    getMatches,
    removeMatches,
    addTurnData,
    calculateGameTurn,
    message,
    createGame,
    setGameData,
    findGameForUser,
    procureKingdomSpecificData
  }
}

module.exports = gameManager()
