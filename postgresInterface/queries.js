'use strict'

const { ignatius, taranis, lucasta, glyndwr, demeter, melanthios, games, kingdoms, territories } = require('./test-data.js')

//= =========== Query Compolations ============\\

const resetUsersTableQuery = `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
    id varchar (36),
    name varchar (20),
    games text ARRAY,
    PRIMARY KEY (id)
    );
    INSERT INTO users(id, name, games) VALUES ${[ignatius, taranis, lucasta, glyndwr, demeter, melanthios].map(user => `('${user.id}', '${user.name}', array[${user.games}])`).join(',')};`

const resetGamesTableQuery = `
    DROP TABLE IF EXISTS games;
    CREATE TABLE games (
    id varchar (36),
    players text ARRAY,
    turn_number int,
    PRIMARY KEY (id)
    );
    INSERT INTO games(id, players, turn_number) VALUES ${games.map(game => `('${game.id}', array[${game.players}], ${game.turn_number})`).join(',')};`

const resetKingdomsTableQuery = `
    DROP TABLE IF EXISTS kingdoms;
    CREATE TABLE kingdoms (
    id varchar (36),
    game_id varchar(36),
    user_id varchar(36),
    food int,
    wood int,
    stone int,
    gold int,
    workers_total int,
    workers_reserve int,
    solders_total int,
    solders_reserve int,
    food_production int,
    wood_production int,
    stone_production int,
    gold_production int,
    PRIMARY KEY (id)
    );
    INSERT INTO kingdoms(id, game_id, user_id, food, wood, stone, gold, workers_total, workers_reserve, solders_total, solders_reserve, food_production, wood_production, stone_production, gold_production) VALUES ${kingdoms.map(kingdom => `('${kingdom.id}','${kingdom.game_id}','${kingdom.user_id}', ${kingdom.food}, ${kingdom.wood}, ${kingdom.stone}, ${kingdom.gold}, ${kingdom.workers_total}, ${kingdom.workers_reserve}, ${kingdom.solders_total}, ${kingdom.solders_reserve}, ${kingdom.food_production}, ${kingdom.wood_production}, ${kingdom.stone_production}, ${kingdom.gold_production})`).join(',')};`

const resetTerritoriesTableQuery = `
    DROP TABLE IF EXISTS territories;
    CREATE TABLE territories (
    id varchar(36),
    game_id varchar(36),
    kingdom_id varchar(36),
    stat_ID int,
    position int,
    army_id varchar(36),
    buildings text ARRAY,
    PRIMARY KEY (id)
    );
    INSERT INTO territories(id, game_id, kingdom_id, stat_ID, position, army_id, buildings) VALUES ${territories.map(territory => `('${territory.id}','${territory.game_id}','${territory.kingdom_id}', ${territory.stat_ID}, ${territory.position}, ${territory.army_id}, ${territory.buildings})`).join(',')};`

const resetArmiesTable = `
    DROP TABLE IF EXISTS armies;
    CREATE TABLE armies (
    id varchar (36),
    size int,
    fire_swords int,
    fire_armors int,
    lightning_swords int,
    lightning_armors int,
    holy_swords int,
    holy_armors int,
    water_swords int,
    water_armors int,
    earth_swords int,
    earth_armors int,
    shadow_swords int,
    shadow_armors int,
    PRIMARY KEY (id)
    );`

const resetHerosTable = `
    DROP TABLE IF EXISTS heros;
    CREATE TABLE heros (
    id varchar (36),
    health int,
    damage int,
    equipment_ID int,
    army_id varchar (36),
    building_id varchar (36),
    PRIMARY KEY (id)
    );`

const resetBuildingsTable = `
    DROP TABLE IF EXISTS buildings;
    CREATE TABLE buildings (
    id varchar (36),
    stat_ID int,
    territory_id varchar(36),
    occupancy int,
    PRIMARY KEY (id)
    );`

const resetDBTables = [resetUsersTableQuery, resetGamesTableQuery, resetKingdomsTableQuery, resetTerritoriesTableQuery, resetArmiesTable, resetHerosTable, resetBuildingsTable].join('')

const kingdomMapId = kingdom => `'${kingdom.id}'`
const kingdomMapFullRow = kingdom => `('${kingdom.id}','${kingdom.gameId}','${kingdom.userId}', ${kingdom.food}, ${kingdom.wood}, ${kingdom.stone}, ${kingdom.gold}, ${kingdom.workersTotal}, ${kingdom.workersReserve}, ${kingdom.soldersTotal}, ${kingdom.soldersReserve}, ${kingdom.foodProduction}, ${kingdom.woodProduction}, ${kingdom.stoneProduction}, ${kingdom.goldProduction})`
const newGameQuery = ({ id, kingdoms, territories, turn }) => `
    INSERT INTO games(id, players, turn_number) VALUES ('${id}', array[${kingdoms.map(kingdomMapId)}], ${turn});
    INSERT INTO kingdoms(id, game_id, user_id, food, wood, stone, gold, workers_total, workers_reserve, solders_total, solders_reserve, food_production, wood_production, stone_production, gold_production) VALUES ${kingdoms.map(kingdomMapFullRow).join(',')};
    INSERT INTO territories(id, game_id, kingdom_id, stat_ID, position, army_id, buildings) VALUES ${territories.map(territory => `('${territory.id}','${territory.gameId}','${territory.kingdomId}', ${territory.statId}, ${territory.position}, ${territory.armyId}, ${territory.buildings})`).join(',')};
`

const selectKingdomsWithGameIdQuery = ({ id }) => `
    SELECT * from kingdoms
    WHERE game_id = '${id}';
`

const selectTerritoriesWithGameIdQuery = ({ id }) => `
    SELECT * from territories
    WHERE game_id = '${id}';
`

const selectTurnFromGamesQuery = ({ id }) => `
    SELECT turn_number from games
    WHERE id = '${id}';
`

const updateKingdomsQuery = kingdoms => {
  return kingdoms.map(kingdom => `
        UPDATE kingdoms
        SET food = ${kingdom.food},
        wood = ${kingdom.wood},
        stone = ${kingdom.stone},
        gold = ${kingdom.gold},
        workers_total = ${kingdom.workersTotal},
        workers_reserve = ${kingdom.workersReserve},
        solders_total = ${kingdom.soldersTotal},
        solders_reserve = ${kingdom.soldersReserve},
        food_production = ${kingdom.foodProduction},
        wood_production = ${kingdom.woodProduction},
        stone_production = ${kingdom.stoneProduction},
        gold_production = ${kingdom.goldProduction}
        WHERE id = '${kingdom.id}';
    `).join('')
}

const updateTerritoriesQuery = territories => {
  return territories.map(territory => `
        UPDATE territories
        SET kingdom_id = '${territory.kingdomId}',
        army_id = '${territory.armyId}',
        buildings = ${territory.buildings}
        WHERE id = '${territory.id}';
    `).join('')
}

const updateGameTurnQuery = game => `
    UPDATE games
    SET turn_number = ${game.turnNumber}
    WHERE id = '${game.id}';
`

module.exports = {
  resetDBTables,
  resetUsersTableQuery,
  resetGamesTableQuery,
  resetKingdomsTableQuery,
  resetTerritoriesTableQuery,
  resetArmiesTable,
  resetHerosTable,
  resetBuildingsTable,
  newGameQuery,
  selectKingdomsWithGameIdQuery,
  selectTerritoriesWithGameIdQuery,
  selectTurnFromGamesQuery,
  updateKingdomsQuery,
  updateTerritoriesQuery,
  updateGameTurnQuery
}
