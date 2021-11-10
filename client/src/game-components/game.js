
import { useState, useEffect } from 'react'

import Board from '../UI-components/board.js'
import Hud from '../UI-components/hud.js'
// import Orders from '../game-objects/orders.js';
import ServerInterface from '../utilities/server-interface.js'

const {
  getGameData,
  // getUserGameData,
  submitTurn,
  postNewGame
} = ServerInterface()

const users = [
  {
    id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
    name: 'Ignatius'
  },
  {
    id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
    name: 'Taranis'
  },
  {
    id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
    name: 'Lucasta'
  },
  {
    id: '2654027b-2f7e-4380-986e-6c154d185ff2',
    name: 'Glyndwr'
  },
  {
    id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
    name: 'Demeter'
  },
  {
    id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
    name: 'Melanthios'
  }
]

let currentGameId = '73d80e8a-3905-43b1-9af1-67f3e5edc223'

const Game = () => {
  const incrementWorkerAssignment = (assignment, increments) => {
    const newKingdomStats = {}

    if (increments) {
      if (kingdomStats.workersReserve) {
        newKingdomStats.workersReserve = kingdomStats.workersReserve - 1
        newKingdomStats[assignment] = kingdomStats[assignment] + 1
      }
    } else {
      if (kingdomStats[assignment]) {
        newKingdomStats.workersReserve = kingdomStats.workersReserve + 1
        newKingdomStats[assignment] = kingdomStats[assignment] - 1
      }
    }
    setKingdomStats({ ...kingdomStats, ...newKingdomStats })
    users.find(user => user.id === kingdomStats.userId).kingdom = {
      ...kingdomStats, ...newKingdomStats
    }
  }

  const getAllKingdoms = () => {
    getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[1].id })
    getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[2].id })
    getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[3].id })
    getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[4].id })
    getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[5].id })
    getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[0].id })
  }

  const handleEndTurn = async () => {
    users.forEach(user => {
      const orders = {
        gameId: user.kingdom.gameId,
        kingdomId: user.kingdom.id,
        userId: user.id,
        foodProduction: user.kingdom.foodProduction,
        woodProduction: user.kingdom.woodProduction,
        stoneProduction: user.kingdom.stoneProduction,
        goldProduction: user.kingdom.goldProduction
      }
      submitTurn({ orders, callback: getAllKingdoms })
    })
  }

  const [kingdomStats, setKingdomStats] = useState({
    food: 0,
    wood: 0,
    stone: 0,
    gold: 0,

    workersReserve: 0,
    workersTotal: 0
  })

  const [territoriesStats, setTerritoriesStats] = useState([])

  const gotGameData = (data) => {
    const user = users.find((user) => user.id === data.kingdom.userId)
    user.kingdom = data.kingdom
    user.territories = data.territories
    setKingdomStats(data.kingdom)
    setTerritoriesStats(data.territories)
  }

  const switchUsers = (index) => {
    if (users[index].kingdom) {
      setKingdomStats(users[index].kingdom)
      setTerritoriesStats(users[index].territories)
    } else {
      getGameData({ callback: gotGameData, gameId: currentGameId, userId: users[index].id })
    }
  }

  const handleMakeNewGame = () => {
    postNewGame(newGameMade)
  }

  const newGameMade = (id) => {
    currentGameId = id
    getAllKingdoms()
  }

  useEffect(getAllKingdoms, [])

  return (
    <div>
      <Board territories={territoriesStats} />
      <Hud
        kingdomStats={kingdomStats} buttonFunctions={{
          incrementWorkerAssignment,
          handleEndTurn,
          handleMakeNewGame,
          switchUsers
        }}
      />
    </div>
  )
}

export default Game
