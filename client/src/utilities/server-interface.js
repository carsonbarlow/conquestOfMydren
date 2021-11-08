import axios from 'axios';


const ServerInterface = () => {

    const getGameData = async ({ callback, gameId, userId }) => {
        const response = await fetch('http://localhost:3001/gameState/?game_id=' + gameId + '&user_id=' + userId);
        const data = await response.json();
        callback(data);
    };

    const submitTurn = async ({ orders, callback }) => {

        const response = await axios.post('http://localhost:3001/submitTurn/', orders);
        const data = await response.data;
        if (data.allUsersReady) {
            callback();
        }
    };

    let newGameDebounce = false;
    const postNewGame = async (callback) => {
        if (!newGameDebounce) {
            newGameDebounce = true;
            let response = await axios.post('http://localhost:3001/newGame/');
            callback(response.data);
            newGameDebounce = false;
        }
    };

    return ({
        getGameData,
        submitTurn,
        postNewGame,
    });
}


export default ServerInterface;
