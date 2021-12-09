/* eslint-disable no-undef */

const { assert } = require('chai')
const sinon = require('sinon')

const client = require('../../pg-client.js')
const queries = require('../../queries.js')
const utilities = require('../../utilities.js')
const requestHandler = require('../../request-handler.js')

const doJson = (data) => {
  testRes.data = data
}
const testRes = { json: doJson }

describe('requestHandler', () => {
  describe('resetDB', () => {
    describe('when successful', () => {
      let queryStub

      before(() => {
        queryStub = sinon.stub(client, 'query').resolves({ foo: 'bar' })
        requestHandler.resetDB({}, testRes)
      })

      after(() => {
        client.query.restore()
      })

      it('calls query with resetDBTables', () => {
        assert.isTrue(queryStub.calledWith(queries.resetDBTables))
      })

      it('returns an empty object', () => {
        assert.deepEqual(testRes.data, {})
      })
    })

    describe('when not successful', () => {
      before(async () => {
        queryStub = sinon.stub(client, 'query').throws({ message: 'foobar' })
        await requestHandler.resetDB({}, testRes)
      })

      after(() => {
        client.query.restore()
      })

      it('retuns an object with the error on it', () => {
        assert.deepEqual(testRes.data, { error: { message: 'foobar' } })
      })
    })

    describe('createNewGame', () => {
      describe('when successful', () => {
        let queryStub,
          newGameStub

        before(async () => {
          queryStub = sinon.stub(client, 'query').resolves({ foo: 'bar' })
          newGameStub = sinon.stub(queries, 'newGame').returns('newGameReturnString')
          await requestHandler.createNewGame({ body: { gameData: 'data' } }, testRes)
        })

        after(() => {
          client.query.restore()
        })

        it('calls query with newGame', () => {
          assert.isTrue(newGameStub.calledWith({ gameData: 'data' }))
          assert.isTrue(queryStub.calledWith('newGameReturnString'))
        })

        it('returns success', () => {
          assert.deepEqual(testRes.data, { success: true })
        })
      })

      describe('when not successful', () => {
        before(async () => {
          sinon.stub(client, 'query').throws({ message: 'foobar' })
          await requestHandler.createNewGame({}, testRes)
        })

        after(() => {
          client.query.restore()
        })

        it('retuns an object with the error on it', () => {
          assert.deepEqual(testRes.data, { error: { message: 'foobar' } })
        })
      })
    })
  })

  describe('getGame', () => {
    describe('when successful', () => {
      let selectTurnFromGamesStub,
        selectKingdomsWithGameIdStub,
        selectTerritoriesWithGameIdStub

      before(async () => {
        selectTurnFromGamesStub = sinon.stub(queries, 'selectTurnFromGames').returns('selectTurnFromGamesString')
        selectKingdomsWithGameIdStub = sinon.stub(queries, 'selectKingdomsWithGameId').returns('selectKingdomsWithGameIdString')
        selectTerritoriesWithGameIdStub = sinon.stub(queries, 'selectTerritoriesWithGameId').returns('selectTerritoriesWithGameIdString')

        sinon.stub(utilities.convertVariableNames, 'kingdomsToCammelCase').returns('cammelCaseKingdoms')
        sinon.stub(utilities.convertVariableNames, 'territoriesToCammelCase').returns('cammelCaseTerritories')

        sinon.stub(client, 'query')
          .onFirstCall().resolves({ rows: [{ turn_number: 1234 }] })
          .onSecondCall().resolves({ rows: ['kingdom1', 'kingdom2', 'kingdom3'] })
          .onThirdCall().resolves({ rows: ['territory1', 'territory2', 'territory3'] })

        await requestHandler.getGame({ query: { gameId: 'testGameId' } }, testRes)
      })

      after(() => {
        queries.selectTurnFromGames.restore()
        queries.selectKingdomsWithGameId.restore()
        queries.selectTerritoriesWithGameId.restore()
        utilities.convertVariableNames.kingdomsToCammelCase.restore()
        utilities.convertVariableNames.territoriesToCammelCase.restore()
        client.query.restore()
      })

      it('queries game table', () => {
        assert.isTrue(selectTurnFromGamesStub.calledWith({ id: 'testGameId' }))
      })

      it('queries kingdoms table', () => {
        assert.isTrue(selectKingdomsWithGameIdStub.calledWith({ id: 'testGameId' }))
      })

      it('queries territories table', () => {
        assert.isTrue(selectTerritoriesWithGameIdStub.calledWith({ id: 'testGameId' }))
      })

      it('returns the collection of queries', () => {
        assert.deepEqual(testRes.data, {
          id: 'testGameId',
          turnNumber: 1234,
          kingdoms: 'cammelCaseKingdoms',
          territories: 'cammelCaseTerritories',
          success: true
        })
      })
    })

    describe('when not successful', () => {
      before(async () => {
        sinon.stub(client, 'query').throws({ message: 'foobar' })
        await requestHandler.getGame({ query: { gameId: 'testGameId' } }, testRes)
      })

      after(() => {
        client.query.restore()
      })

      it('retuns an object with the error on it', () => {
        assert.deepEqual(testRes.data, { id: 'testGameId', error: { message: 'foobar' } })
      })
    })
  })

  describe('updateGameTurn', () => {
    describe('when successful', () => {
      let updateKingdomsStub,
        updateTerritoriesStub,
        updateGameTurnStub

      before(async () => {
        sinon.stub(client, 'query').resolves('success')
        updateKingdomsStub = sinon.stub(queries, 'updateKingdoms').returns('updateKingdomsString')
        updateTerritoriesStub = sinon.stub(queries, 'updateTerritories').returns('updateTerritoriesString')
        updateGameTurnStub = sinon.stub(queries, 'updateGameTurn').returns('updateGameTurnString')

        await requestHandler.updateGameTurn({
          body: {
            id: 'testGameId',
            kingdoms: 'testKingdoms',
            territories: 'testTerritories',
            turnNumber: 'testTurnNumber'
          }
        }, testRes)
      })

      after(() => {
        client.query.restore()
      })

      it('updates the kingdoms table', () => {
        assert.isTrue(updateKingdomsStub.calledWith('testKingdoms'))
      })

      it('updates the territories table', () => {
        assert.isTrue(updateTerritoriesStub.calledWith('testTerritories'))
      })

      it('updates the turn number', () => {
        assert.isTrue(updateGameTurnStub.called)
      })

      it('returns the game turn data', () => {
        assert.deepEqual(testRes.data, {
          id: 'testGameId',
          kingdoms: 'testKingdoms',
          territories: 'testTerritories',
          turnNumber: 'testTurnNumber'
        })
      })
    })

    describe('when not successful', () => {
      before(async () => {
        sinon.stub(client, 'query').throws({ message: 'foobar' })
        await requestHandler.updateGameTurn({ body: { id: 'testGameId' } }, testRes)
      })

      after(() => {
        client.query.restore()
      })

      it('retuns the request object with the error attached to it', () => {
        assert.deepEqual(testRes.data, { id: 'testGameId', error: { message: 'foobar' } })
      })
    })
  })
})
