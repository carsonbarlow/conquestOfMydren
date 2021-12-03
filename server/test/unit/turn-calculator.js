/* eslint-disable no-undef */

const assert = require('assert')
const { calculateTurn } = require('../../turn-calculator.js')

const { testGame1 } = require('../test-data.js')

describe('turn-calculator', () => {
  describe('calculateTurn', () => {
    let newGameState1
    before(() => {
      newGameState1 = calculateTurn(testGame1)
    })

    it('assigns workers from kingdoms[0].orders to their assigments', () => {
      assert.equal(newGameState1.kingdoms[0].foodProduction, 5)
      assert.equal(newGameState1.kingdoms[0].woodProduction, 2)
      assert.equal(newGameState1.kingdoms[0].stoneProduction, 2)
      assert.equal(newGameState1.kingdoms[0].goldProduction, 1)
    })

    it('assigns workers from kingdoms[1].orders to their assigments', () => {
      assert.equal(newGameState1.kingdoms[1].foodProduction, 2)
      assert.equal(newGameState1.kingdoms[1].woodProduction, 3)
      assert.equal(newGameState1.kingdoms[1].stoneProduction, 3)
      assert.equal(newGameState1.kingdoms[1].goldProduction, 2)
    })

    it('assigns workers from kingdoms[2].orders to their assigments', () => {
      assert.equal(newGameState1.kingdoms[2].foodProduction, 3)
      assert.equal(newGameState1.kingdoms[2].woodProduction, 1)
      assert.equal(newGameState1.kingdoms[2].stoneProduction, 3)
      assert.equal(newGameState1.kingdoms[2].goldProduction, 3)
    })

    it('assigns workers from kingdoms[3].orders to their assigments', () => {
      assert.equal(newGameState1.kingdoms[3].foodProduction, 3)
      assert.equal(newGameState1.kingdoms[3].woodProduction, 3)
      assert.equal(newGameState1.kingdoms[3].stoneProduction, 3)
      assert.equal(newGameState1.kingdoms[3].goldProduction, 1)
    })

    it('assigns workers from kingdoms[4].orders to their assigments', () => {
      assert.equal(newGameState1.kingdoms[4].foodProduction, 3)
      assert.equal(newGameState1.kingdoms[4].woodProduction, 2)
      assert.equal(newGameState1.kingdoms[4].stoneProduction, 4)
      assert.equal(newGameState1.kingdoms[4].goldProduction, 1)
    })

    it('assigns workers from kingdoms[5].orders to their assigments', () => {
      assert.equal(newGameState1.kingdoms[5].foodProduction, 1)
      assert.equal(newGameState1.kingdoms[5].woodProduction, 2)
      assert.equal(newGameState1.kingdoms[5].stoneProduction, 2)
      assert.equal(newGameState1.kingdoms[5].goldProduction, 5)
    })

    it('gives resources to kingdoms[0] determined by assigned workers', () => {
      assert.equal(newGameState1.kingdoms[0].food, 125)
      assert.equal(newGameState1.kingdoms[0].wood, 106)
      assert.equal(newGameState1.kingdoms[0].stone, 104)
      assert.equal(newGameState1.kingdoms[0].gold, 101)
    })

    it('gives resources to kingdoms[1] determined by assigned workers', () => {
      assert.equal(newGameState1.kingdoms[1].food, 110)
      assert.equal(newGameState1.kingdoms[1].wood, 109)
      assert.equal(newGameState1.kingdoms[1].stone, 106)
      assert.equal(newGameState1.kingdoms[1].gold, 102)
    })

    it('gives resources to kingdoms[2] determined by assigned workers', () => {
      assert.equal(newGameState1.kingdoms[2].food, 115)
      assert.equal(newGameState1.kingdoms[2].wood, 103)
      assert.equal(newGameState1.kingdoms[2].stone, 106)
      assert.equal(newGameState1.kingdoms[2].gold, 103)
    })

    it('gives resources to kingdoms[3] determined by assigned workers', () => {
      assert.equal(newGameState1.kingdoms[3].food, 115)
      assert.equal(newGameState1.kingdoms[3].wood, 109)
      assert.equal(newGameState1.kingdoms[3].stone, 106)
      assert.equal(newGameState1.kingdoms[3].gold, 101)
    })

    it('gives resources to kingdoms[4] determined by assigned workers', () => {
      assert.equal(newGameState1.kingdoms[4].food, 115)
      assert.equal(newGameState1.kingdoms[4].wood, 106)
      assert.equal(newGameState1.kingdoms[4].stone, 108)
      assert.equal(newGameState1.kingdoms[4].gold, 101)
    })

    it('gives resources to kingdoms[5] determined by assigned workers', () => {
      assert.equal(newGameState1.kingdoms[5].food, 105)
      assert.equal(newGameState1.kingdoms[5].wood, 106)
      assert.equal(newGameState1.kingdoms[5].stone, 104)
      assert.equal(newGameState1.kingdoms[5].gold, 105)
    })

    it('remove orders for a fresh new turn', () => {
      assert.equal(newGameState1.kingdoms[0].orders, undefined)
      assert.equal(newGameState1.kingdoms[1].orders, undefined)
      assert.equal(newGameState1.kingdoms[2].orders, undefined)
      assert.equal(newGameState1.kingdoms[3].orders, undefined)
      assert.equal(newGameState1.kingdoms[4].orders, undefined)
      assert.equal(newGameState1.kingdoms[5].orders, undefined)
    })

    it('increment turn', () => {
      assert.equal(newGameState1.turnNumber, 1235)
    })
  })
})
