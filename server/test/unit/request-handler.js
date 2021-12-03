/* eslint-disable no-undef */

const { assert } = require('chai')
const sinon = require('sinon')
const gameManager = require('../../game-manager.js')
const requestHandler = require('../../request-handler.js')
const superagent = require('superagent')

const {
  testGame1,
  testGameStateRequest1
} = require('../test-data.js')

const doJson = (data) => {
  testRes.data = data
}
const testRes = { json: doJson }

describe('requestHandler', () => {
  describe('gameState', () => {
    describe('when it does\'t have the game in memory', () => {
      let setGameDataStub

      before(() => {
        sinon.stub(gameManager, 'findGameForUser').returns(null)
        setGameDataStub = sinon.stub(gameManager, 'setGameData')
        getGameRequestStub = sinon.stub(requestHandler, 'getGameRequest').resolves(testGame1)
      })

      after(() => {
        gameManager.findGameForUser.restore()
        gameManager.setGameData.restore()
        requestHandler.getGameRequest.restore()
      })

      it('gets game information from DB', async () => {
        await requestHandler.gameState(testGameStateRequest1, testRes)
        assert.isTrue(setGameDataStub.calledWith(testGame1))
      })

      it('puts game information from DB to memory', async () => {
        await requestHandler.gameState(testGameStateRequest1, testRes)
        assert.isTrue(setGameDataStub.calledWith(testGame1))
      })
    })

    describe('when it does have the game in memory', () => {
      let getGameRequestStub

      before(() => {
        sinon.stub(gameManager, 'findGameForUser').returns(testGame1)
        getGameRequestStub = sinon.stub(requestHandler, 'getGameRequest')
      })

      it('does not get game information for DB', async () => {
        await requestHandler.gameState(testGameStateRequest1, testRes)
        assert.isFalse(getGameRequestStub.called)
      })

      after(() => {
        gameManager.findGameForUser.restore()
        requestHandler.getGameRequest.restore()
      })
    })
  })

  describe('submitTurn', () => {
    describe('when not all players have submitted their turn', () => {
      before(() => {
        sinon.stub(gameManager, 'addTurnData').returns(false)
      })

      it('returns an empty object', async () => {
        await requestHandler.submitTurn({ body: 'foobar' }, testRes)
        assert.deepEqual(testRes.data, {})
      })

      after(() => {
        gameManager.addTurnData.restore()
      })
    })

    describe('when all other players have submitted their turn', () => {
      let calculateGameTurnStub,
        postGameRequestStub

      before(async () => {
        sinon.stub(gameManager, 'addTurnData').returns(true)
        calculateGameTurnStub = sinon.stub(gameManager, 'calculateGameTurn').returns(testGame1)
        postGameRequestStub = sinon.stub(requestHandler, 'postGameRequest').resolves({})
        await requestHandler.submitTurn({ body: 'foobar' }, testRes)
      })

      it('sends the game data off to calculate the next turn', () => {
        assert.isTrue(calculateGameTurnStub.called)
      })

      it('posts the new game turn data to the DB', () => {
        assert.isTrue(postGameRequestStub.called)
      })

      it('returns an object indicating a new game turn is available', () => {
        assert.deepEqual(testRes.data, { allUsersReady: true })
      })

      after(() => {
        gameManager.addTurnData.restore()
        gameManager.calculateGameTurn.restore()
        requestHandler.postGameRequest.restore()
      })
    })
  })

  describe('newGame', () => {
    it('sends new game data to the DB', async () => {
      let sentData

      sinon.stub(gameManager, 'createGame').returns(testGame1)
      sinon.stub(superagent, 'post').returns({
        send: data => {
          sentData = data
          return {
            set: () => {
              return {
                end: () => {
                }
              }
            }
          }
        }
      })
      await requestHandler.newGame({}, testRes)

      assert.deepEqual(sentData, testGame1)

      gameManager.createGame.restore()
      superagent.post.restore()
    })

    describe('calls superagent', () => {
      let superagentStub,
        superagentEndFunctionCall

      before(async () => {
        sinon.stub(gameManager, 'createGame').returns(testGame1)

        superagentStub = sinon.stub(superagent, 'post')
        superagentStub.returns({
          send: () => {
            return {
              set: () => {
                return {
                  end: (func) => {
                    superagentEndFunctionCall = func
                  }
                }
              }
            }
          }
        })

        await requestHandler.newGame({}, testRes)
      })

      after(() => {
        gameManager.createGame.restore()
        superagent.post.restore()
      })

      describe('with a successful query', () => {
        it('returns the gameId of the new game', async () => {
          superagentEndFunctionCall(null, {})
          assert.deepEqual(testRes.data, { gameId: testGame1.id })
        })
      })

      describe('with an error returned', () => {
        it('returns success with the error attached', async () => {
          superagentEndFunctionCall({ message: 'this is an error' }, { body: 'foobar' })
          assert.deepEqual(testRes.data, { err: { message: 'this is an error' }, body: 'foobar' })
        })
      })
    })
  })
})

describe('getGameRequest', () => {
  let superagentStub

  before(async () => {
    superagentStub = sinon.stub(superagent, 'get')
    superagentStub.returns({
      query: () => {
        return {
          then: func => {
            func({ body: 'foobar' })
          }
        }
      }
    })
  })

  after(() => {
    superagent.get.restore()
  })

  it('resolves the returned promise with the results from DB', async () => {
    const result = await requestHandler.getGameRequest({}, testRes)
    assert.equal(result, 'foobar')
  })
})

describe('postGameRequest', () => {
  let superagentStub

  before(async () => {
    superagentStub = sinon.stub(superagent, 'post')
    superagentStub.returns({
      send: () => {
        return {
          set: () => {
            return {
              end: func => {
                func(null, { body: 'foobar' })
              }
            }
          }
        }
      }
    })
  })

  after(() => {
    superagent.post.restore()
  })

  it('resolves the returned promise with the results from DB', async () => {
    const result = await requestHandler.postGameRequest({})
    assert.deepEqual(result, { body: 'foobar' })
  })
})
