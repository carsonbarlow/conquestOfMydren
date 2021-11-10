
const { v4: uuidv4 } = require('uuid')

const playerArray = [
  {
    id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
    name: 'Ignatius'
  }, {
    id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
    name: 'Taranis'
  }, {
    id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
    name: 'Lucasta'
  }, {
    id: '2654027b-2f7e-4380-986e-6c154d185ff2',
    name: 'Glyndwr'
  }, {
    id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
    name: 'Demeter'
  }, {
    id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
    name: 'Melanthios'
  }
]

const territoryArray = [
  {
    kingdomIdIndex: 0,
    statId: 1,
    position: 1
  }, {
    kingdomIdIndex: null,
    statId: 8,
    position: 2
  }, {
    kingdomIdIndex: null,
    statId: 7,
    position: 3
  }, {
    kingdomIdIndex: 5,
    statId: 6,
    position: 4
  }, {
    kingdomIdIndex: null,
    statId: 9,
    position: 5
  }, {
    kingdomIdIndex: 1,
    statId: 2,
    position: 6
  }, {
    kingdomIdIndex: null,
    statId: 7,
    position: 7
  }, {
    kingdomIdIndex: null,
    statId: 8,
    position: 8
  }, {
    kingdomIdIndex: null,
    statId: 9,
    position: 9
  }, {
    kingdomIdIndex: null,
    statId: 10,
    position: 10
  }, {
    kingdomIdIndex: null,
    statId: 9,
    position: 11
  }, {
    kingdomIdIndex: null,
    statId: 8,
    position: 12
  }, {
    kingdomIdIndex: null,
    statId: 7,
    position: 13
  }, {
    kingdomIdIndex: 4,
    statId: 5,
    position: 14
  }, {
    kingdomIdIndex: null,
    statId: 9,
    position: 15
  }, {
    kingdomIdIndex: 2,
    statId: 3,
    position: 16
  }, {
    kingdomIdIndex: null,
    statId: 7,
    position: 17
  }, {
    kingdomIdIndex: null,
    statId: 8,
    position: 18
  }, {
    kingdomIdIndex: 3,
    statId: 4,
    position: 19
  }
]

const gameStart = () => {
  const gameId = uuidv4()

  const kingdoms = playerArray.map(player => {
    return {
      id: uuidv4(),
      gameId: gameId,
      userId: player.id,
      food: 100,
      wood: 100,
      stone: 100,
      gold: 100,
      workersTotal: 10,
      workersReserve: 10,
      soldersTotal: 10,
      soldersReserve: 10,
      foodProduction: 0,
      woodProduction: 0,
      stoneProduction: 0,
      goldProduction: 0
    }
  })

  const territories = territoryArray.map(territory => {
    return {
      id: uuidv4(),
      gameId: gameId,
      kingdomId: territory.kingdomIdIndex === null ? null : kingdoms[territory.kingdomIdIndex].id,
      statId: territory.statId,
      position: territory.position,
      armyId: null,
      buildings: null
    }
  })

  return {
    id: gameId,
    kingdoms,
    territories,
    turn: 1
  }
}

module.exports = { gameStart }
