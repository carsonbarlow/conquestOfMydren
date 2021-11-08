
const defaultOrders = [
    {
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da',
        user_id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
        food_production: 5,
        wood_production: 0,
        stone_production: 0,
        gold_production: 5
    }, {
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
        user_id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
        food_production: 0,
        wood_production: 5,
        stone_production: 5,
        gold_production: 0,
    }, {
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: '595e4d57-465d-4660-9dff-85ba6d95b468',
        user_id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
        food_production: 1,
        wood_production: 1,
        stone_production: 1,
        gold_production: 7,
    }, {
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
        user_id: '2654027b-2f7e-4380-986e-6c154d185ff2',
        food_production: 7,
        wood_production: 1,
        stone_production: 1,
        gold_production: 1,
    }, {
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: 'b180212d-0eea-4194-b65f-53ccb28290d1',
        user_id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
        food_production: 1,
        wood_production: 1,
        stone_production: 8,
        gold_production: 0,
    }, {
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: '281f5006-4f09-4d52-a665-2e32e7adeb11',
        user_id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
        food_production: 0,
        wood_production: 0,
        stone_production: 0,
        gold_production: 10,
    }
];

const FOOD_PRODUCTION_RATE = 5,
    WOOD_PRODUCTION_RATE = 3,
    STONE_PRODUCTION_RATE = 2,
    GOLD_PRODUCTION_RATE = 1;


const calculateTurn = (game) => {
    let newGameState = { ...game };

    newGameState.kingdoms.forEach((kingdom, i) => {
        kingdom.orders = kingdom.orders || defaultOrders[i];
    });

    //assign workers
    newGameState.kingdoms.forEach(kingdom => {
        kingdom.food_production = kingdom.orders.food_production;
        kingdom.wood_production = kingdom.orders.wood_production;
        kingdom.stone_production = kingdom.orders.stone_production;
        kingdom.gold_production = kingdom.orders.gold_production;
        kingdom.workers_reserve = kingdom.workers_total - kingdom.food_production - kingdom.wood_production - kingdom.stone_production - kingdom.gold_production;
    });

    //give resources
    newGameState.kingdoms.forEach(kingdom => {
        kingdom.food += kingdom.food_production * FOOD_PRODUCTION_RATE;
        kingdom.wood += kingdom.wood_production * WOOD_PRODUCTION_RATE;
        kingdom.stone += kingdom.stone_production * STONE_PRODUCTION_RATE;
        kingdom.gold += kingdom.gold_production * GOLD_PRODUCTION_RATE;
    });

    //remove orders for a fresh new turn
    newGameState.kingdoms.forEach(kingdom => {
        kingdom.orders = undefined;
    });

    //increment turn
    newGameState.turn_number++;

    return newGameState;
};


module.exports = {
    calculateTurn,
};
