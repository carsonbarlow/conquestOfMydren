'use strict'

const config = require('config')
const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'unsecured',
  database: config.databaseName
})

module.exports = client
