const config = {

  fileLocations: {
    forGameJs: {
      turnCalculator: './test/stubs/turn-calculator.js'
    }
  },

  // Customer module configs
  Customer: {
    dbConfig: {
      host: 'localhost',
      port: 5983,
      dbName: 'customers'
    },
    credit: {
      initialLimit: 100,
      // Set low for development
      initialDays: 1
    }
  }
}

module.exports = { config }
