"use strict";

const { gameStart } = require('./config/game-start.js');
const { calculateTurn } = require('./turn-calculator.js');

let matches = {};

const game = () => {

    const createGame = () => {
        const newGame = gameStart();
        matches[newGame.id] = { ...newGame };
        return matches[newGame.id];
    };

    const setGameData = (data) => {
        matches[data.id] = { id: data.id, kingdoms: data.kingdoms, territories: data.territories, turn_number: data.turn_number };
    };

    const findGameForUser = ({ gameId, userId }) => {
        const gameData = matches[gameId];
        if (!gameData) {
            return null;
        }
        const kingdomId = gameData.kingdoms.find(kingdom => kingdom.user_id == userId).id;
        return {
            id: gameId,
            kingdom: gameData.kingdoms.find(kingdom => kingdom.user_id == userId),
            territories: gameData.territories.map(territory => {
                let filteredTerritory = {};
                filteredTerritory.id = territory.id;
                filteredTerritory.kingdom_id = territory.kingdom_id;
                filteredTerritory.position = territory.position;
                filteredTerritory.stat_id = territory.stat_id;
                if (territory.kingdom_id == kingdomId) {
                    filteredTerritory.army_id = territory.army_id;
                    filteredTerritory.buildings = territory.buildings;
                }
                return filteredTerritory;
            }),
            turn_number: gameData.turn_number,
        };
    };

    const addTurnData = (data) => {
        matches[data.game_id].kingdoms.find(kingdom => kingdom.id == data.kingdom_id ).orders = data;

        const unreadyUser = matches[data.game_id].kingdoms.find(kingdom => kingdom.orders == undefined);

        return !unreadyUser;
    };

    const calculateGameTurn = (id) => {
        const newGameState = calculateTurn(matches[id]);
        matches[id] = newGameState;
        return newGameState;
    };

    const procureKingdomSpecificData = ({ kingdomId, gameData }) => {
        let returnData = {
            id: gameData.id,
            turn_number: gameData.turn_number,
        };
        returnData.kingdom = gameData.kingdoms.find((kingdom) => kingdom.id === kingdomId);
        returnData.territories = gameData.territories.map(territory => {
            let filteredTerritory = {};
            filteredTerritory.id = territory.id;
            filteredTerritory.kingdom_id = territory.kingdom_id;
            filteredTerritory.position = territory.position;
            filteredTerritory.stat_id = territory.stat_id;
            if (territory.kingdom_id == kingdomId) {
                filteredTerritory.army_id = territory.army_id;
                filteredTerritory.buildings = territory.buildings;
            }
            return filteredTerritory;
        });
        return returnData;
    };

    const message = "Hello from Game 0.0.1!";

    return {
        addTurnData,
        calculateGameTurn,
        message,
        createGame,
        setGameData,
        findGameForUser,
        procureKingdomSpecificData,
    }

};

module.exports = game();
