/* eslint-disable no-undef */

const { assert } = require('chai')
const sinon = require('sinon')
const request = require('supertest')

const app = require('../../index.js')
const client = require('../../pg-client.js')

const { testGame1 } = require('../test-data.js')

describe('Postgress Interface Integration', () => {
  after(() => {
    app.closeServer()
  })

  describe('resetDB', () => {
    describe('when successful', () => {
      it('returns an empty object', async () => {
        const response = await request(app)
          .get('/resetDB')
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, {})
      })
    })

    describe('when DB error', () => {
      before(() => {
        sinon.stub(client, 'query').throws({ message: 'DB error' })
      })

      after(() => {
        client.query.restore()
      })

      it('returns an object with the error on it', async () => {
        const response = await request(app)
          .get('/resetDB')
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, { error: { message: 'DB error' } })
      })
    })
  })

  describe('newGame', () => {
    before(async () => {
      await request(app).get('/resetDB')
    })

    describe('when presented with valid game data', () => {
      it('returns an object indicating success', async () => {
        const response = await request(app)
          .post('/newGame/')
          .send(testGame1)
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, { success: true })
      })
    })

    describe('when presented with invalid game data', () => {
      it('returns error 442', async () => {
        const response = await request(app)
          .post('/newGame/')
          .send({ id: 'invalidId' })
          .expect('Content-Type', /json/)
          .expect(422)

        assert.deepEqual(response.body, { error: '"id" must be a valid GUID' })
      })
    })

    describe('when a DB error occurs', () => {
      before(() => {
        sinon.stub(client, 'query').throws({ message: 'DB error' })
      })

      after(() => {
        client.query.restore()
      })

      it('returns an object with the error on it', async () => {
        const response = await request(app)
          .post('/newGame/')
          .send(testGame1)
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, { error: { message: 'DB error' } })
      })
    })
  })

  describe('getGame', () => {
    describe('when presented with valid request parameters', () => {
      before(async () => {
        await request(app)
          .get('/resetDB')
        await request(app)
          .post('/newGame/')
          .send(testGame1)
      })

      it('returns a game object', async () => {
        const response = await request(app)
          .get('/getGame/')
          .query({ gameId: testGame1.id })
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, testGame1)
      })
    })

    describe('when presented with invalid request parameters', () => {
      it('returns error 422', async () => {
        const response = await request(app)
          .get('/getGame/')
          .query({ gameId: 'invalidId' })
          .expect('Content-Type', /json/)
          .expect(422)

        assert.deepEqual(response.body, { error: '"gameId" must be a valid GUID' })
      })
    })

    describe('when the DB has an error', () => {
      before(() => {
        sinon.stub(client, 'query').throws({ message: 'DB error' })
      })

      after(() => {
        client.query.restore()
      })

      it('returns an object with the error on it', async () => {
        const response = await request(app)
          .get('/getGame/')
          .query({ gameId: testGame1.id })
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, { error: { message: 'DB error' }, id: testGame1.id })
      })
    })
  })

  describe('updateGameTurn', () => {
    describe('when given valid game turn data', () => {
      before(async () => {
        await request(app)
          .get('/resetDB')
        await request(app)
          .post('/newGame/')
          .send(testGame1)
      })

      it('returns the updated game object', async () => {
        const updatedTestGame1 = { ...testGame1, turnNumber: 2 }

        const response = await request(app)
          .post('/updateGameTurn/')
          .send(updatedTestGame1)
          .expect('Content-Type', /json/)
          .expect(200)
        assert.deepEqual(response.body, updatedTestGame1)
      })
    })

    describe('when given invalid game turn data', () => {
      it('returns error 422', async () => {
        const response = await request(app)
          .get('/updateGameTurn/')
          .send({ gameId: 'invalidId' })
          .expect('Content-Type', /json/)
          .expect(422)

        assert.deepEqual(response.body, { error: '"gameId" is not allowed' })
      })
    })

    describe('when the DB has an error', () => {
      before(() => {
        sinon.stub(client, 'query').throws({ message: 'DB error' })
      })

      after(() => {
        client.query.restore()
      })

      it('returns an object with the error on it', async () => {
        const response = await request(app)
          .post('/updateGameTurn/')
          .send(testGame1)
          .expect('Content-Type', /json/)
          .expect(200)

        assert.deepEqual(response.body, { ...testGame1, error: { message: 'DB error' }, id: testGame1.id })
      })
    })
  })
})
