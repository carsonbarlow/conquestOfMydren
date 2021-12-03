/* eslint-disable no-undef */

const sinon = require('sinon')
const turnCalculator = require('../../turn-calculator')

const { assert, expect } = require('chai')
const gameManager = require('../../game-manager.js')

const {
  testGame1,
  testGame2,
  testGame3,
  testGame4,
  testOrders
} = require('../test-data.js')

describe('gameManager', () => {
  describe('getMatches', () => {
    it('returns an empty object if there re no matches', () => {
      const matches = gameManager.getMatches()
      assert.typeOf(matches, 'Object')
      assert.equal(Object.keys(matches).length, 0)
    })

    it('returns all matches', () => {
      gameManager.setGameData(testGame1)
      gameManager.setGameData(testGame2)
      const matches = gameManager.getMatches()
      assert.equal(Object.keys(matches).length, 2)
    })
  })

  describe('removeMatches', () => {
    before(() => {
      gameManager.setGameData(testGame1)
    })

    it('removes all the matches', () => {
      let matches = gameManager.getMatches()
      assert.notEqual(Object.keys(matches).length, 0)
      gameManager.removeMatches()
      matches = gameManager.getMatches()
      assert.equal(Object.keys(matches).length, 0)
    })
  })

  describe('createGame', () => {
    let newGame

    before(() => {
      newGame = gameManager.createGame()
    })

    it('creates a new gameManager...', () => {
      assert.typeOf(newGame, 'Object')
    })

    it('...with 6 players', () => {
      assert.equal(newGame.kingdoms.length, 6)
    })

    it('...with 19 territories', () => {
      assert.equal(newGame.territories.length, 19)
    })

    it('...with starting food at 100 for all kingdoms', () => {
      assert.equal(newGame.kingdoms[0].food, 100)
      assert.equal(newGame.kingdoms[1].food, 100)
      assert.equal(newGame.kingdoms[2].food, 100)
      assert.equal(newGame.kingdoms[3].food, 100)
      assert.equal(newGame.kingdoms[4].food, 100)
      assert.equal(newGame.kingdoms[5].food, 100)
    })

    it('...with starting workersTotal at 10', () => {
      assert.equal(newGame.kingdoms[0].workersTotal, 10)
      assert.equal(newGame.kingdoms[1].workersTotal, 10)
      assert.equal(newGame.kingdoms[2].workersTotal, 10)
      assert.equal(newGame.kingdoms[3].workersTotal, 10)
      assert.equal(newGame.kingdoms[4].workersTotal, 10)
      assert.equal(newGame.kingdoms[5].workersTotal, 10)
    })

    it('...with no workers assigned', () => {
      assert.equal(newGame.kingdoms[0].workersReserve, 10)
      assert.equal(newGame.kingdoms[1].workersReserve, 10)
      assert.equal(newGame.kingdoms[2].workersReserve, 10)
      assert.equal(newGame.kingdoms[3].workersReserve, 10)
      assert.equal(newGame.kingdoms[4].workersReserve, 10)
      assert.equal(newGame.kingdoms[5].workersReserve, 10)
    })

    it('...with turn number at 1', () => {
      assert.equal(newGame.turnNumber, 1)
    })
  })

  describe('setGameData', () => {
    let testGame
    before(() => {
      gameManager.removeMatches()
      gameManager.setGameData(testGame3)
      testGame = gameManager.getMatches()[testGame3.id]
    })

    it('game id', () => {
      assert.equal(testGame.id, testGame3.id)
    })

    it('set kingdom data', () => {
      assert.deepEqual(testGame.kingdoms, testGame3.kingdoms)
    })

    it('set territory data', () => {
      assert.deepEqual(testGame.territories, testGame3.territories)
    })

    it('set turn number', () => {
      assert.equal(testGame.turnNumber, testGame3.turnNumber)
    })

    it('should not set other parameters', () => {
      assert.equal(testGame3.foo, 'bar')
      assert.equal(testGame.foo, undefined)
    })
  })

  describe('findGameForUser', () => {
    let testGame

    it('returns null if game isn\'t found', () => {
      gameManager.removeMatches()
      testGame = gameManager.findGameForUser({ gameId: testGame1.id, userId: testGame1.kingdoms[0].id })
      assert.equal(testGame, null)
    })
    it('returns only the kingdom of the user', () => {
      gameManager.setGameData(testGame1)
      testGame = gameManager.findGameForUser({ gameId: testGame1.id, userId: testGame1.kingdoms[0].userId })
      assert.typeOf(testGame, 'Object')
      assert.typeOf(testGame.kingdom, 'Object')
      assert.equal(testGame.kingdom.id, testGame1.kingdoms[0].id)
    })
    it('returns territories with global information', () => {
      gameManager.setGameData(testGame1)
      testGame = gameManager.findGameForUser({ gameId: testGame1.id, userId: testGame1.kingdoms[0].userId })
      assert.typeOf(testGame.territories, 'Array')
      testGame.territories.forEach(territory => {
        assert.typeOf(territory.statId, 'Number')
      })
    })
    it('filters out \'unknown\' territory information', () => {
      gameManager.setGameData(testGame1)
      testGame = gameManager.findGameForUser({ gameId: testGame1.id, userId: testGame1.kingdoms[0].userId })
      const knownTerritory = testGame.territories.find(territory => territory.kingdomId === testGame1.kingdoms[0].id)
      const unknownTerritory = testGame.territories.find(territory => territory.kingdomId !== testGame1.kingdoms[0].id)
      expect(knownTerritory).to.have.ownPropertyDescriptor('armyId')
      expect(unknownTerritory).not.to.have.ownPropertyDescriptor('armyId')
    })
    it('returns turn number', () => {
      assert.equal(testGame.turnNumber, testGame1.turnNumber)
    })
  })

  describe('addTurnData', () => {
    beforeEach(() => {
      gameManager.setGameData(testGame4)
    })
    it('adds orders to specific kingdom', () => {
      gameManager.addTurnData(testOrders[0])
      const testGame = gameManager.getMatches()[testGame4.id]
      assert.deepEqual(testOrders[0], testGame.kingdoms[0].orders)
    })

    it('retuns \'false\' if a kingdom does\'t have orders', () => {
      const shouldBeFalse = gameManager.addTurnData(testOrders[0])
      assert.equal(shouldBeFalse, false)
    })

    it('returns \'true\' if all kingdoms have orders', () => {
      gameManager.addTurnData(testOrders[0])
      gameManager.addTurnData(testOrders[1])
      gameManager.addTurnData(testOrders[2])
      gameManager.addTurnData(testOrders[3])
      gameManager.addTurnData(testOrders[4])
      const shouldBeTrue = gameManager.addTurnData(testOrders[5])
      assert.equal(shouldBeTrue, true)
    })

    afterEach(() => {
      gameManager.removeMatches()
    })
  })

  describe('calculateGameTurn', () => {
    before(() => {
      sinon.stub(turnCalculator, 'calculateTurn').returns(testGame3)
      gameManager.setGameData(testGame1)
    })

    after(() => {
      turnCalculator.calculateTurn.restore()
      gameManager.removeMatches()
    })

    it('sets the new game data to matches', () => {
      gameManager.calculateGameTurn(testGame1.id)
      const testGame = gameManager.getMatches()[testGame1.id]
      assert.equal(testGame.id, testGame1.id)
      assert.equal(testGame.foo, 'bar')
    })

    it('returns new game data', () => {
      const newGameData = gameManager.calculateGameTurn(testGame1.id)
      assert.typeOf(newGameData, 'Object')
      assert.equal(newGameData.foo, 'bar')
    })
  })
})
