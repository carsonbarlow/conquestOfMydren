
const calculateTurn = (game) => {
  const newGameState = { ...game }
  newGameState.foo = 'bar'
  return newGameState
}

module.exports = {
  calculateTurn
}
