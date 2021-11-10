
const defaultOrders = [
  {
    gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
    kingdomId: 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da',
    userId: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
    foodProduction: 5,
    woodProduction: 0,
    stoneProduction: 0,
    goldProduction: 5
  }, {
    gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
    kingdomId: 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
    userId: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
    foodProduction: 0,
    woodProduction: 5,
    stoneProduction: 5,
    goldProduction: 0
  }, {
    gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
    kingdomId: '595e4d57-465d-4660-9dff-85ba6d95b468',
    userId: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
    foodProduction: 1,
    woodProduction: 1,
    stoneProduction: 1,
    goldProduction: 7
  }, {
    gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
    kingdomId: '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
    userId: '2654027b-2f7e-4380-986e-6c154d185ff2',
    foodProduction: 7,
    woodProduction: 1,
    stoneProduction: 1,
    goldProduction: 1
  }, {
    gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
    kingdomId: 'b180212d-0eea-4194-b65f-53ccb28290d1',
    userId: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
    foodProduction: 1,
    woodProduction: 1,
    stoneProduction: 8,
    goldProduction: 0
  }, {
    gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
    kingdomId: '281f5006-4f09-4d52-a665-2e32e7adeb11',
    userId: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
    foodProduction: 0,
    woodProduction: 0,
    stoneProduction: 0,
    goldProduction: 10
  }
]

const FOODPRODUCTION_RATE = 5
const WOODPRODUCTION_RATE = 3
const STONEPRODUCTION_RATE = 2
const GOLDPRODUCTION_RATE = 1

const calculateTurn = (game) => {
  const newGameState = { ...game }

  newGameState.kingdoms.forEach((kingdom, i) => {
    kingdom.orders = kingdom.orders || defaultOrders[i]
  })

  // assign workers
  newGameState.kingdoms.forEach(kingdom => {
    kingdom.foodProduction = kingdom.orders.foodProduction
    kingdom.woodProduction = kingdom.orders.woodProduction
    kingdom.stoneProduction = kingdom.orders.stoneProduction
    kingdom.goldProduction = kingdom.orders.goldProduction
    kingdom.workersReserve = kingdom.workersTotal - kingdom.foodProduction - kingdom.woodProduction - kingdom.stoneProduction - kingdom.goldProduction
  })

  // give resources
  newGameState.kingdoms.forEach(kingdom => {
    kingdom.food += kingdom.foodProduction * FOODPRODUCTION_RATE
    kingdom.wood += kingdom.woodProduction * WOODPRODUCTION_RATE
    kingdom.stone += kingdom.stoneProduction * STONEPRODUCTION_RATE
    kingdom.gold += kingdom.goldProduction * GOLDPRODUCTION_RATE
  })

  // remove orders for a fresh new turn
  newGameState.kingdoms.forEach(kingdom => {
    kingdom.orders = undefined
  })

  // increment turn
  newGameState.turnNumber++

  return newGameState
}

module.exports = {
  calculateTurn
}
