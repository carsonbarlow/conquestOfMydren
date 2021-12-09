
const convertVariableNames = {
  kingdomsToCammelCase: (kingdoms) => {
    return kingdoms.map(kingdom => {
      return {
        id: kingdom.id,
        gameId: kingdom.game_id,
        userId: kingdom.user_id,
        food: kingdom.food,
        wood: kingdom.wood,
        stone: kingdom.stone,
        gold: kingdom.gold,
        workersTotal: kingdom.workers_total,
        workersReserve: kingdom.workers_reserve,
        soldersTotal: kingdom.solders_total,
        soldersReserve: kingdom.solders_reserve,
        foodProduction: kingdom.food_production,
        woodProduction: kingdom.wood_production,
        stoneProduction: kingdom.stone_production,
        goldProduction: kingdom.gold_production
      }
    })
  },
  territoriesToCammelCase: (territories) => {
    return territories.map(territory => {
      return {
        id: territory.id,
        gameId: territory.game_id,
        kingdomId: territory.kingdom_id,
        statId: territory.stat_id,
        position: territory.position,
        armyId: territory.army_id,
        buildings: territory.buildings
      }
    })
  }
}

const utilities = { convertVariableNames }

module.exports = utilities
