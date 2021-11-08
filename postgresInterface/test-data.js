'use strict';

const { uuid } = require('uuidv4');


const ignatius = {
    id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
    name: 'Ignatius',
    games: [`'73d80e8a-3905-43b1-9af1-67f3e5edc223'`, `'63400ad5-a686-41cb-80df-e16b98e092cc'`,`'f657dad4-b815-4d28-96d4-36ee080f1a67'`]

};

const taranis = {
    id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
    name: 'Taranis',
    games: [`'73d80e8a-3905-43b1-9af1-67f3e5edc223'`, `'63400ad5-a686-41cb-80df-e16b98e092cc'`, `'f657dad4-b815-4d28-96d4-36ee080f1a67'`]

};

const lucasta = {
    id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
    name: 'Lucasta',
    games: [`'73d80e8a-3905-43b1-9af1-67f3e5edc223'`, `'63400ad5-a686-41cb-80df-e16b98e092cc'`, `'f657dad4-b815-4d28-96d4-36ee080f1a67'`]

};

const glyndwr = {
    id: '2654027b-2f7e-4380-986e-6c154d185ff2',
    name: 'Glyndwr',
    games: [`'73d80e8a-3905-43b1-9af1-67f3e5edc223'`, `'63400ad5-a686-41cb-80df-e16b98e092cc'`, `'f657dad4-b815-4d28-96d4-36ee080f1a67'`]

};

const demeter = {
    id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
    name: 'Demeter',
    games: [`'73d80e8a-3905-43b1-9af1-67f3e5edc223'`, `'63400ad5-a686-41cb-80df-e16b98e092cc'`, `'f657dad4-b815-4d28-96d4-36ee080f1a67'`]

};

const melanthios = {
    id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
    name: 'Melanthios',
    games: [`'73d80e8a-3905-43b1-9af1-67f3e5edc223'`, `'63400ad5-a686-41cb-80df-e16b98e092cc'`, `'f657dad4-b815-4d28-96d4-36ee080f1a67'`]

};

const games = [
    {
        id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        players: [`'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5'`, `'a14b15b4-6bea-4291-8e32-eb4de3228c0d'`, `'fa443fba-3a6e-461c-831e-8d64da5f62e4'`, `'2654027b-2f7e-4380-986e-6c154d185ff2'`, `'5066dd63-26cb-4f70-87b8-46c6a65d5d44'`,`'b939012a-9c98-43d9-bccf-3b699d7e308a'`],
        turn_number: 1,
    },
    {
        id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        players: [`'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5'`, `'a14b15b4-6bea-4291-8e32-eb4de3228c0d'`, `'fa443fba-3a6e-461c-831e-8d64da5f62e4'`, `'2654027b-2f7e-4380-986e-6c154d185ff2'`, `'5066dd63-26cb-4f70-87b8-46c6a65d5d44'`, `'b939012a-9c98-43d9-bccf-3b699d7e308a'`],
        turn_number: 2,
    },
    {
        id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        players: [`'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5'`, `'a14b15b4-6bea-4291-8e32-eb4de3228c0d'`, `'fa443fba-3a6e-461c-831e-8d64da5f62e4'`, `'2654027b-2f7e-4380-986e-6c154d185ff2'`, `'5066dd63-26cb-4f70-87b8-46c6a65d5d44'`, `'b939012a-9c98-43d9-bccf-3b699d7e308a'`],
        turn_number: 3,
    }
];

const kingdoms = [
    {
        //fire
        id: 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        user_id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
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
        gold_production: 0
    },{
        id: 'bb8e30bc-575d-4f6f-b883-978e896fae2c',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        user_id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
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
        gold_production: 0
    },{
        id: 'a1b0fc96-b3e5-4f0a-baed-7d1fa6c35c7e',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        user_id: 'fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5',
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
        gold_production: 0
    }, {
        //lightning
        id: 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        user_id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
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
        gold_production: 0
    },{
        id: '177f2ad7-d1df-4488-b71f-f79b23f082da',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        user_id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
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
        gold_production: 0
    },{
        id: 'ecfab881-1567-4052-8b1b-a5396d138bec',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        user_id: 'a14b15b4-6bea-4291-8e32-eb4de3228c0d',
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
        gold_production: 0
    }, {
        //holy
        id: '595e4d57-465d-4660-9dff-85ba6d95b468',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        user_id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
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
        gold_production: 0
    },{
        id: '9872abaf-f16b-43ee-8003-dab0807b6539',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        user_id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
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
        gold_production: 0
    },{
        id: '43f3df5a-ff36-4910-8ffb-47cb712f25cd',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        user_id: 'fa443fba-3a6e-461c-831e-8d64da5f62e4',
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
        gold_production: 0
    }, {
        //water
        id: '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        user_id: '2654027b-2f7e-4380-986e-6c154d185ff2',
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
        gold_production: 0
    },{
        id: '687c9f91-6728-4e5a-b38a-eeff4e2427a4',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        user_id: '2654027b-2f7e-4380-986e-6c154d185ff2',
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
        gold_production: 0
    },{
        id: '41d46bff-3032-4cc9-b19a-869aa494b402',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        user_id: '2654027b-2f7e-4380-986e-6c154d185ff2',
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
        gold_production: 0
    }, {
        //earth
        id: 'b180212d-0eea-4194-b65f-53ccb28290d1',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        user_id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
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
        gold_production: 0
    },{
        id: 'b9dc8ec9-48f0-40ee-89a6-2f52dc2ae3a8',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        user_id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
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
        gold_production: 0
    },{
        id: 'cd056c0c-9e9c-4779-9b90-6f84e4917f46',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        user_id: '5066dd63-26cb-4f70-87b8-46c6a65d5d44',
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
        gold_production: 0
    }, {
        //shadow
        id: '281f5006-4f09-4d52-a665-2e32e7adeb11',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        user_id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
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
        gold_production: 0
    },{
        id: 'b3c6cb0e-bef4-4cfe-b2a3-a98bfa689f10',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        user_id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
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
        gold_production: 0
    },{
        id: 'e60c5538-d5cf-4aa8-b7a1-6679dae3eb99',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        user_id: 'b939012a-9c98-43d9-bccf-3b699d7e308a',
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
        gold_production: 0
    }
];

const territories = [
    {
        //game 1
        id: '9d299f53-dc1f-405d-8514-9d171a6cd874',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da', //fire
        stat_ID: 1,
        position: 1,
        army_id: null,
        buildings: null
    },{
        id: '4a0f536f-a3ad-42a7-b69a-85eaca213b8a',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 8,
        position: 2,
        army_id: null,
        buildings: null
    },{
        id: '67eaefe9-df5f-42db-979c-1937411d7b78',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 7,
        position: 3,
        army_id: null,
        buildings: null
    },{
        id: '57a1ce8a-9170-4abc-a2c2-64f7c1cfb9b3',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: '281f5006-4f09-4d52-a665-2e32e7adeb11',
        stat_ID: 6,
        position: 4,
        army_id: null,
        buildings: null
    },{
        id: 'd0323030-3e49-4cbe-8fba-7be3a44d23db',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 9,
        position: 5,
        army_id: null,
        buildings: null
    },{
        id: 'fa9cabea-9856-40f7-ad5e-48af24b9e691',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
        stat_ID: 2,
        position: 6,
        army_id: null,
        buildings: null
    },{
        id: '3b59e9b9-a3f2-430c-9c7d-4fa59f412cdb',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 7,
        position: 7,
        army_id: null,
        buildings: null
    },{
        id: '2ec2f676-7e40-4f5d-8a17-3a755070439c',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 8,
        position: 8,
        army_id: null,
        buildings: null
    },{
        id: '3945bbc7-978b-4718-975e-24c5861d147b',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 9,
        position: 9,
        army_id: null,
        buildings: null
    },{
        id: 'dcfb760a-851e-4fc4-8ae7-8f36cc4e34e7',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 10,
        position: 10,
        army_id: null,
        buildings: null
    },{
        id: '749a71db-8e45-4d8e-b799-d018067d2d5e',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 9,
        position: 11,
        army_id: null,
        buildings: null
    },{
        id: '7f68a879-b9c7-4b6f-9d99-189b13569795',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 8,
        position: 12,
        army_id: null,
        buildings: null
    },{
        id: '21ebfefb-2b88-411e-9c47-22946ceef7a1',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 7,
        position: 13,
        army_id: null,
        buildings: null
    },{
        id: '746b5b2b-7592-42c5-9e11-205a0b289952',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: 'b180212d-0eea-4194-b65f-53ccb28290d1',
        stat_ID: 5,
        position: 14,
        army_id: null,
        buildings: null
    },{
        id: '32fc9490-0051-4538-9d20-a7e3efc5f16c',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 9,
        position: 15,
        army_id: null,
        buildings: null
    },{
        id: '870929ba-e52b-4b21-b563-6c3dd5dc8106',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: '595e4d57-465d-4660-9dff-85ba6d95b468',
        stat_ID: 3,
        position: 16,
        army_id: null,
        buildings: null
    },{
        id: 'cc181e2e-a587-44ea-acaa-8d8d71084108',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 7,
        position: 17,
        army_id: null,
        buildings: null
    },{
        id: '455e86e7-6514-418a-a65e-aa7ea7f1995d',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: null,
        stat_ID: 8,
        position: 18,
        army_id: null,
        buildings: null
    },{
        id: '2ed7dec8-707a-4161-87d7-b0c9fa85e1d6',
        game_id: '73d80e8a-3905-43b1-9af1-67f3e5edc223',
        kingdom_id: '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
        stat_ID: 4,
        position: 19,
        army_id: null,
        buildings: null
    },{
        //game 2
        id: '71e46192-2b2f-4fb1-a648-89aaf9f3598b',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: 'bb8e30bc-575d-4f6f-b883-978e896fae2c',
        stat_ID: 1,
        position: 1,
        army_id: null,
        buildings: null
    },{
        id: '6baeb982-cb8f-4185-9419-8c7afea98381',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 8,
        position: 2,
        army_id: null,
        buildings: null
    },{
        id: 'd8e5b2ce-7049-4fed-b07a-ab7f045ece13',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 7,
        position: 3,
        army_id: null,
        buildings: null
    },{
        id: '5b116699-305f-4243-9eeb-bf18b426bce4',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: 'b3c6cb0e-bef4-4cfe-b2a3-a98bfa689f10',
        stat_ID: 6,
        position: 4,
        army_id: null,
        buildings: null
    },{
        id: 'dc1aaee5-7939-45bd-81a8-5cc86f593500',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 9,
        position: 5,
        army_id: null,
        buildings: null
    },{
        id: '1c98b1f5-3f7a-4097-b7d2-cdb03476f7b6',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: '177f2ad7-d1df-4488-b71f-f79b23f082da',
        stat_ID: 2,
        position: 6,
        army_id: null,
        buildings: null
    },{
        id: '87812d36-cd38-4417-97eb-0e8b45585d11',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 7,
        position: 7,
        army_id: null,
        buildings: null
    },{
        id: '2dc8c540-c8aa-4ee4-8538-9005b42f7e01',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 8,
        position: 8,
        army_id: null,
        buildings: null
    },{
        id: '033af147-4e1d-415f-abbc-030a6ea28ee3',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 9,
        position: 9,
        army_id: null,
        buildings: null
    },{
        id: '5ba485a2-bc0b-450e-a9cb-8ce0bf7c2d31',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 10,
        position: 10,
        army_id: null,
        buildings: null
    },{
        id: '82f56b74-c8f7-4783-83c5-d6ffba58b6f3',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 9,
        position: 11,
        army_id: null,
        buildings: null
    },{
        id: '2cf49f59-0c8c-47e9-b28a-c84bc8509ab7',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 8,
        position: 12,
        army_id: null,
        buildings: null
    },{
        id: '841671a7-4039-42d2-be8d-6b8050bd226b',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 7,
        position: 13,
        army_id: null,
        buildings: null
    },{
        id: 'd23275ed-f448-476e-a2a0-7e4f82c39788',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: 'b9dc8ec9-48f0-40ee-89a6-2f52dc2ae3a8',
        stat_ID: 5,
        position: 14,
        army_id: null,
        buildings: null
    },{
        id: '3b4bce96-cfbb-428c-b0a3-a430ed6308eb',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 9,
        position: 15,
        army_id: null,
        buildings: null
    },{
        id: '84e8c080-c17d-4932-8e5d-d3bf92a7df5e',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: '9872abaf-f16b-43ee-8003-dab0807b6539',
        stat_ID: 3,
        position: 16,
        army_id: null,
        buildings: null
    },{
        id: '0d23c040-f846-4df0-b808-dcea92855030',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 7,
        position: 17,
        army_id: null,
        buildings: null
    },{
        id: '6a8ba83c-5e10-4e84-964d-300c0b8f4870',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: null,
        stat_ID: 8,
        position: 18,
        army_id: null,
        buildings: null
    },{
        id: '3fad0217-1966-441a-b5bf-e64d5cb99ce1',
        game_id: '63400ad5-a686-41cb-80df-e16b98e092cc',
        kingdom_id: '687c9f91-6728-4e5a-b38a-eeff4e2427a4',
        stat_ID: 4,
        position: 19,
        army_id: null,
        buildings: null
    },{
        //game 3
        id: '573c06e6-ebfb-4f3f-aade-1418a46c876f',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: 'a1b0fc96-b3e5-4f0a-baed-7d1fa6c35c7e',
        stat_ID: 1,
        position: 1,
        army_id: null,
        buildings: null
    },{
        id: '2bf95c22-9380-414b-a2c3-89cfe5bb511f',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 8,
        position: 2,
        army_id: null,
        buildings: null
    },{
        id: '6ecc24e0-1762-4560-9df2-996db585761a',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 7,
        position: 3,
        army_id: null,
        buildings: null
    },{
        id: '04566680-3c69-4c43-96de-aa7f7ad5fd85',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: 'e60c5538-d5cf-4aa8-b7a1-6679dae3eb99',
        stat_ID: 6,
        position: 4,
        army_id: null,
        buildings: null
    },{
        id: '91564682-3228-4a5f-b4ec-c8d4e50a3784',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 9,
        position: 5,
        army_id: null,
        buildings: null
    },{
        id: '0a8cc469-14fe-4d54-af48-8bbbd7ab421c',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: 'ecfab881-1567-4052-8b1b-a5396d138bec',
        stat_ID: 2,
        position: 6,
        army_id: null,
        buildings: null
    },{
        id: '8fa495e9-6b0a-461d-b0eb-41d7b14b7a87',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 7,
        position: 7,
        army_id: null,
        buildings: null
    },{
        id: '4f4d2f71-2286-436e-a0c9-0d1e4d532397',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 8,
        position: 8,
        army_id: null,
        buildings: null
    },{
        id: 'e9f786b7-224e-4a6b-940b-0cfaae145e15',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 9,
        position: 9,
        army_id: null,
        buildings: null
    },{
        id: '278f7690-5eaa-44ae-84ad-a7dff24fc4b1',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 10,
        position: 10,
        army_id: null,
        buildings: null
    },{
        id: '9c4a4dee-dd7c-4dd4-9d15-fc2a861f268c',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 9,
        position: 11,
        army_id: null,
        buildings: null
    },{
        id: '8f2fb0bc-81bc-40b2-bf69-ecd02aac2234',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 8,
        position: 12,
        army_id: null,
        buildings: null
    },{
        id: '2dc472bd-cb53-4bd0-8622-9ad16f49fab3',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 7,
        position: 13,
        army_id: null,
        buildings: null
    },{
        id: '4654bcdb-edb8-44a6-990a-91c29ada995f',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: 'cd056c0c-9e9c-4779-9b90-6f84e4917f46',
        stat_ID: 5,
        position: 14,
        army_id: null,
        buildings: null
    },{
        id: 'dd7686ae-a200-4bb2-af6c-235678281e7e',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 9,
        position: 15,
        army_id: null,
        buildings: null
    },{
        id: 'c3798801-b5fc-4236-97d5-d1af53aa56ee',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: '43f3df5a-ff36-4910-8ffb-47cb712f25cd',
        stat_ID: 3,
        position: 16,
        army_id: null,
        buildings: null
    },{
        id: '1aefb6d9-b178-408e-a855-620fc0fed014',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 7,
        position: 17,
        army_id: null,
        buildings: null
    },{
        id: 'b1b2eebb-eab3-4af6-8429-3a67eec3b705',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: null,
        stat_ID: 8,
        position: 18,
        army_id: null,
        buildings: null
    },{
        id: '2c2d6a46-b544-41fc-a918-f268c99a3f9d',
        game_id: 'f657dad4-b815-4d28-96d4-36ee080f1a67',
        kingdom_id: '41d46bff-3032-4cc9-b19a-869aa494b402',
        stat_ID: 4,
        position: 19,
        army_id: null,
        buildings: null
    }
];

//console.log(uuid()); // Used to generate more test data.

module.exports.ignatius = ignatius;
module.exports.taranis = taranis;
module.exports.lucasta = lucasta;
module.exports.glyndwr = glyndwr;
module.exports.demeter = demeter;
module.exports.melanthios = melanthios;

module.exports.games = games;
module.exports.kingdoms = kingdoms;
module.exports.territories = territories;
