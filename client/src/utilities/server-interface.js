import axios from 'axios'

const ServerInterface = () => {
  const getGameData = async ({ callback, gameId, userId }) => {
    const response = await axios.get('http://localhost:3001/gameState/?gameId=' + gameId + '&userId=' + userId)
    const data = await response.data
    callback(data)
  }

  const submitTurn = async ({ orders, callback }) => {
    const response = await axios.post('http://localhost:3001/submitTurn/', orders)
    const data = await response.data
    if (data.allUsersReady) {
      callback()
    }
  }

  let newGameDebounce = false
  const postNewGame = async (callback) => {
    if (!newGameDebounce) {
      newGameDebounce = true
      const response = await axios.post('http://localhost:3001/newGame/')
      callback(response.data.gameId)
      newGameDebounce = false
    }
  }

  return ({
    getGameData,
    submitTurn,
    postNewGame
  })
}

export default ServerInterface
