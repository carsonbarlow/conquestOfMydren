"use strict";

const express = require('express');
const expressPort = 3002;

const bodyParser = require('body-parser');

const { Client } = require('pg');
const { uuid } = require('uuidv4');
const { //selectKingdomQuery,
    //selectTerritoriesQuery,
    resetDBTables,
    resetUsersTableQuery,
    resetGamesTableQuery,
    resetKingdomsTableQuery,
    resetTerritoriesTableQuery,
    resetArmiesTable,
    resetHerosTable,
    resetBuildingsTable,
    newGameQuery,
    selectKingdomsWithGameIdQuery,
    selectTerritoriesWithGameIdQuery,
    selectTurnFromGamesQuery,
    updateKingdomsQuery,
    updateTerritoriesQuery,
    updateGameTurnQuery,
} = require('./queries');

//============ DB Interactions ============\\

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "unsecured",
    database: "conquest"
});

client.connect();

const resetDB = async () => {
    let returnData = {};
    
    try {
        let response = await client.query(resetDBTables);
    } catch (error) {
        console.log(error);
        returnData.error = error;
    }
};


//const getGameStateForPlayer = async (kingdomId) => {
//    let returnData = {
//        id: 'foobar',
//        turn: 1,
//    };

//    try {
//        let response = await client.query(selectKingdomQuery(kingdomId));
//        returnData.kingdom = response.rows[0];
//        response = await client.query(selectTerritoriesQuery(returnData.kingdom.game_id));
//        returnData.territories = response.rows.map(territory => {
//            let filteredTerritory = {};
//            filteredTerritory.id = territory.id;
//            filteredTerritory.kingdom_id = territory.kingdom_id;
//            filteredTerritory.position = territory.position;
//            filteredTerritory.stat_id = territory.stat_id;
//            if (territory.kingdom_id == kingdomId) {
//                filteredTerritory.army_id = territory.army_id;
//                filteredTerritory.buildings = territory.buildings;
//            }
//            return filteredTerritory;
//        });
//    } catch (error) {
//        console.log(error);
//        returnData.error = error;
//    }

//    //console.log('returnData: ', returnData);
//    return returnData;
//};

const createNewGame = async (newGameData) => {
    let returnData = {};
    try {
        let response = await client.query(newGameQuery(newGameData));
        console.log('New game created.');
        returnData.success = true;
    } catch (error) {
        console.log(error);
        returnData.error = error;
    }
    return returnData;
};

const getGame = async (id) => {
    let returnData = { id };
    try {
        let response = await client.query(selectTurnFromGamesQuery({ id }));
        returnData.turn_number = response.rows[0].turn_number;
        response = await client.query(selectKingdomsWithGameIdQuery({ id }));
        returnData.kingdoms = response.rows;
        response = await client.query(selectTerritoriesWithGameIdQuery({ id }));
        returnData.territories = response.rows;
        console.log(`Selected game: ${id}.`);
        returnData.success = true;
    } catch (error) {
        console.log(error);
        returnData.error = error;
    }
    return returnData;
};

const updateGameTurn = async (gameState) => {
    await client.query(updateKingdomsQuery(gameState.kingdoms));
    await client.query(updateTerritoriesQuery(gameState.territories));
    await client.query(updateGameTurnQuery(gameState));
    console.log(`Updated game ${gameState.id} to turn ${gameState.turn_number}`);
    return gameState;
};


//============ Recieves Data Requests ============\\


const app = express();

app.use(bodyParser.json()); 
app.use(express.json());

app.get('/resetDB/', async (req, res) => {
    let response = await resetDB();
    res.json(response);
});

//app.get('/gameStateForPlayer/', async (req, res) => {
//    let response = await getGameStateForPlayer(req.query.kingdom_id);
//    res.json(response);
//});

app.post('/newGame/', async (req, res) => {
    let response = await createNewGame(req.body);
    res.json(response);
});

app.listen(expressPort, () => console.log(`Example app listening on port ${expressPort}!`));

app.get('/getGame/', async (req, res) => {
    let response = await getGame(req.query.game_id);
    res.json(response);
});

app.post('/updateGameTurn/', async (req, res) => {
    let response = await updateGameTurn(req.body);
    res.json(response);
});
