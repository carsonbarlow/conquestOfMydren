
const { v4 : uuidv4 } = require('uuid');

const playerArray = [
    {
        id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
        name: 'Ignatius',
    },{
        id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
        name: 'Taranis',
    },{
        id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
        name: 'Lucasta',
    },{
        id: '2654027b-2f7e-4380-986e-6c154d185ff2',
        name: 'Glyndwr',
    },{
        id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
        name: 'Demeter',
    },{
        id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
        name: 'Melanthios',
    },
];

const territoryArray = [
    {
        kingdom_id_index: 0,
        stat_id: 1,
        position: 1,
    }, {
        kingdom_id_index: null,
        stat_id: 8,
        position: 2,
    }, {
        kingdom_id_index: null,
        stat_id: 7,
        position: 3,
    }, {
        kingdom_id_index: 5,
        stat_id: 6,
        position: 4,
    }, {
        kingdom_id_index: null,
        stat_id: 9,
        position: 5,
    }, {
        kingdom_id_index: 1,
        stat_id: 2,
        position: 6,
    }, {
        kingdom_id_index: null,
        stat_id: 7,
        position: 7,
    }, {
        kingdom_id_index: null,
        stat_id: 8,
        position: 8,
    }, {
        kingdom_id_index: null,
        stat_id: 9,
        position: 9,
    }, {
        kingdom_id_index: null,
        stat_id: 10,
        position: 10,
    }, {
        kingdom_id_index: null,
        stat_id: 9,
        position: 11,
    }, {
        kingdom_id_index: null,
        stat_id: 8,
        position: 12,
    }, {
        kingdom_id_index: null,
        stat_id: 7,
        position: 13,
    }, {
        kingdom_id_index: 4,
        stat_id: 5,
        position: 14,
    }, {
        kingdom_id_index: null,
        stat_id: 9,
        position: 15,
    }, {
        kingdom_id_index: 2,
        stat_id: 3,
        position: 16,
    }, {
        kingdom_id_index: null,
        stat_id: 7,
        position: 17,
    }, {
        kingdom_id_index: null,
        stat_id: 8,
        position: 18,
    }, {
        kingdom_id_index: 3,
        stat_id: 4,
        position: 19,
    },
];

const gameStart = () => {
    const gameId = uuidv4();

    const kingdoms = playerArray.map(player => {
        return {
            id: uuidv4(),
            game_id: gameId,
            user_id: player.id,
            food: 100,
            wood: 100,
            stone: 100,
            gold: 100,
            workers_total: 10,
            workers_reserve: 10,
            solders_total: 10,
            solders_reserve: 10,
            food_production: 0,
            wood_production: 0,
            stone_production: 0,
            gold_production: 0,
        }
    });
    
    const territories = territoryArray.map(territory => {
        return {
            id: uuidv4(),
            game_id: gameId,
            kingdom_id: territory.kingdom_id_index === null ? null : kingdoms[territory.kingdom_id_index].id,
            stat_id: territory.stat_id,
            position: territory.position,
            army_id: null,
            buildings: null,
        };
    });

    return {
        id: gameId,
        kingdoms,
        territories,
        turn: 1,
    };
};


module.exports = { gameStart };