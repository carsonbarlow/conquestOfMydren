const joi = require('joi')

const newGameSchema = joi.object({
  id: joi.string().guid(),
  kingdoms: joi.array().items(joi.object({
    id: joi.string().guid(),
    gameId: joi.string().guid(),
    userId: joi.string().guid(),
    food: joi.number().integer(),
    wood: joi.number().integer(),
    stone: joi.number().integer(),
    gold: joi.number().integer(),
    workersTotal: joi.number().integer(),
    workersReserve: joi.number().integer(),
    soldersTotal: joi.number().integer(),
    soldersReserve: joi.number().integer(),
    foodProduction: joi.number().integer(),
    woodProduction: joi.number().integer(),
    stoneProduction: joi.number().integer(),
    goldProduction: joi.number().integer()
  })),
  territories: joi.array().items(joi.object({
    id: joi.string().guid(),
    gameId: joi.string().guid(),
    kingdomId: joi.string().guid().allow(null),
    statId: joi.number().integer(),
    position: joi.number().integer(),
    armyId: joi.string().guid().allow(null),
    buildings: joi.array().allow(null)
  })),
  turnNumber: joi.number().integer()
})

const getGameSchema = joi.object({
  gameId: joi.string().guid()
})

const updateGameTurnSchema = joi.object({
  id: joi.string().guid(),
  kingdoms: joi.array().items(joi.object({
    id: joi.string().guid(),
    gameId: joi.string().guid(),
    userId: joi.string().guid(),
    food: joi.number().integer(),
    wood: joi.number().integer(),
    stone: joi.number().integer(),
    gold: joi.number().integer(),
    workersTotal: joi.number().integer(),
    workersReserve: joi.number().integer(),
    soldersTotal: joi.number().integer(),
    soldersReserve: joi.number().integer(),
    foodProduction: joi.number().integer(),
    woodProduction: joi.number().integer(),
    stoneProduction: joi.number().integer(),
    goldProduction: joi.number().integer()
  })),
  territories: joi.array().items(joi.object({
    id: joi.string().guid(),
    gameId: joi.string().guid(),
    kingdomId: joi.string().guid().allow(null),
    statId: joi.number().integer(),
    position: joi.number().integer(),
    armyId: joi.string().guid().allow(null),
    buildings: joi.array().allow(null)
  })),
  turnNumber: joi.number().integer()
})

const schemas = {
  newGame: newGameSchema,
  getGame: getGameSchema,
  updateGameTurn: updateGameTurnSchema
}

const validation = (req, res, next) => {
  const pathName = req._parsedUrl.pathname.replace(/\//g, '')
  const validationSchema = schemas[pathName]

  if (validationSchema) {
    const objectToValidate = Object.keys(req.body).length ? req.body : req.query
    const { error } = validationSchema.validate(objectToValidate)
    const valid = error == null

    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')
      res.status(422).json({ error: message })
    }
  } else {
    next()
  }
}

module.exports = validation
