/* eslint-disable no-undef */

const { assert } = require('chai')

const { testKingdomsData1, testTerritoriesData1 } = require('../test-data.js')

const utilities = require('../../utilities.js')

describe('utilities', () => {
  describe('convertVariableNames', () => {
    describe('kingdomsToCammelCase', () => {
      it('converts snake case postgress data names of kingdoms to cammel case names', () => {
        assert.deepEqual(utilities.convertVariableNames.kingdomsToCammelCase(testKingdomsData1), [
          {
            id: 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            userId: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
            food: 220,
            wood: 136,
            stone: 108,
            gold: 100,
            workersTotal: 10,
            workersReserve: 0,
            soldersTotal: 10,
            soldersReserve: 10,
            foodProduction: 6,
            woodProduction: 3,
            stoneProduction: 1,
            goldProduction: 0
          },
          {
            id: 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            userId: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
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
          },
          {
            id: '595e4d57-465d-4660-9dff-85ba6d95b468',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            userId: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
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
          },
          {
            id: '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            userId: '2654027b-2f7e-4380-986e-6c154d185ff2',
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
          },
          {
            id: 'b180212d-0eea-4194-b65f-53ccb28290d1',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            userId: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
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
          },
          {
            id: '281f5006-4f09-4d52-a665-2e32e7adeb11',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            userId: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
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
        ])
      })
    })

    describe('territoriesToCammelCase', () => {
      it('converts snake case postgress data names of territories to cammel case names', () => {
        // console.log(utilities.convertVariableNames.territoriesToCammelCase(testTerritoriesData1))
        assert.deepEqual(utilities.convertVariableNames.territoriesToCammelCase(testTerritoriesData1), [
          {
            id: '9d299f53-dc1f-405d-8514-9d171a6cd874',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da',
            statId: 1,
            position: 1,
            armyId: null,
            buildings: null
          },
          {
            id: '4a0f536f-a3ad-42a7-b69a-85eaca213b8a',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 8,
            position: 2,
            armyId: null,
            buildings: null
          },
          {
            id: '67eaefe9-df5f-42db-979c-1937411d7b78',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 7,
            position: 3,
            armyId: null,
            buildings: null
          },
          {
            id: '57a1ce8a-9170-4abc-a2c2-64f7c1cfb9b3',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: '281f5006-4f09-4d52-a665-2e32e7adeb11',
            statId: 6,
            position: 4,
            armyId: null,
            buildings: null
          },
          {
            id: 'd0323030-3e49-4cbe-8fba-7be3a44d23db',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 9,
            position: 5,
            armyId: null,
            buildings: null
          },
          {
            id: 'fa9cabea-9856-40f7-ad5e-48af24b9e691',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
            statId: 2,
            position: 6,
            armyId: null,
            buildings: null
          },
          {
            id: '3b59e9b9-a3f2-430c-9c7d-4fa59f412cdb',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 7,
            position: 7,
            armyId: null,
            buildings: null
          },
          {
            id: '2ec2f676-7e40-4f5d-8a17-3a755070439c',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 8,
            position: 8,
            armyId: null,
            buildings: null
          },
          {
            id: '3945bbc7-978b-4718-975e-24c5861d147b',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 9,
            position: 9,
            armyId: null,
            buildings: null
          },
          {
            id: 'dcfb760a-851e-4fc4-8ae7-8f36cc4e34e7',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 10,
            position: 10,
            armyId: null,
            buildings: null
          },
          {
            id: '749a71db-8e45-4d8e-b799-d018067d2d5e',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 9,
            position: 11,
            armyId: null,
            buildings: null
          },
          {
            id: '7f68a879-b9c7-4b6f-9d99-189b13569795',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 8,
            position: 12,
            armyId: null,
            buildings: null
          },
          {
            id: '21ebfefb-2b88-411e-9c47-22946ceef7a1',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 7,
            position: 13,
            armyId: null,
            buildings: null
          },
          {
            id: '746b5b2b-7592-42c5-9e11-205a0b289952',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: 'b180212d-0eea-4194-b65f-53ccb28290d1',
            statId: 5,
            position: 14,
            armyId: null,
            buildings: null
          },
          {
            id: '32fc9490-0051-4538-9d20-a7e3efc5f16c',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 9,
            position: 15,
            armyId: null,
            buildings: null
          },
          {
            id: '870929ba-e52b-4b21-b563-6c3dd5dc8106',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: '595e4d57-465d-4660-9dff-85ba6d95b468',
            statId: 3,
            position: 16,
            armyId: null,
            buildings: null
          },
          {
            id: 'cc181e2e-a587-44ea-acaa-8d8d71084108',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 7,
            position: 17,
            armyId: null,
            buildings: null
          },
          {
            id: '455e86e7-6514-418a-a65e-aa7ea7f1995d',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: null,
            statId: 8,
            position: 18,
            armyId: null,
            buildings: null
          },
          {
            id: '2ed7dec8-707a-4161-87d7-b0c9fa85e1d6',
            gameId: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
            kingdomId: '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
            statId: 4,
            position: 19,
            armyId: null,
            buildings: null
          }
        ])
      })
    })
  })
})
