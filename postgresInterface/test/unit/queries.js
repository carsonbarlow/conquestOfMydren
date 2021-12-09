/* eslint-disable no-undef */

const { assert } = require('chai')

const queries = require('../../queries.js')
const allSpaces = / /g
const withNothing = ''

const { testGame1, testGame2 } = require('../test-data.js')

describe('queries', () => {
  describe('resetUsersTable', () => {
    it('returns a query to reset the postgres tables with three games', () => {
      assert.equal(queries.resetDBTables.replace(allSpaces, withNothing), `
                DROP TABLE IF EXISTS users;
                CREATE TABLE users (
                id varchar (36),
                name varchar (20),
                games text ARRAY,
                PRIMARY KEY (id)
                );
                INSERT INTO users(id, name, games) VALUES ('fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5', 'Ignatius', array['73d80e8a-3905-43b1-9af1-67f3e5edc223','63400ad5-a686-41cb-80df-e16b98e092cc','f657dad4-b815-4d28-96d4-36ee080f1a67']),('a14b15b4-6bea-4291-8e32-eb4de3228c0d', 'Taranis', array['73d80e8a-3905-43b1-9af1-67f3e5edc223','63400ad5-a686-41cb-80df-e16b98e092cc','f657dad4-b815-4d28-96d4-36ee080f1a67']),('fa443fba-3a6e-461c-831e-8d64da5f62e4', 'Lucasta', array['73d80e8a-3905-43b1-9af1-67f3e5edc223','63400ad5-a686-41cb-80df-e16b98e092cc','f657dad4-b815-4d28-96d4-36ee080f1a67']),('2654027b-2f7e-4380-986e-6c154d185ff2', 'Glyndwr', array['73d80e8a-3905-43b1-9af1-67f3e5edc223','63400ad5-a686-41cb-80df-e16b98e092cc','f657dad4-b815-4d28-96d4-36ee080f1a67']),('5066dd63-26cb-4f70-87b8-46c6a65d5d44', 'Demeter', array['73d80e8a-3905-43b1-9af1-67f3e5edc223','63400ad5-a686-41cb-80df-e16b98e092cc','f657dad4-b815-4d28-96d4-36ee080f1a67']),('b939012a-9c98-43d9-bccf-3b699d7e308a', 'Melanthios', array['73d80e8a-3905-43b1-9af1-67f3e5edc223','63400ad5-a686-41cb-80df-e16b98e092cc','f657dad4-b815-4d28-96d4-36ee080f1a67']);
                DROP TABLE IF EXISTS games;
                CREATE TABLE games (
                id varchar (36),
                players text ARRAY,
                turn_number int,
                PRIMARY KEY (id)
                );
                INSERT INTO games(id, players, turn_number) VALUES ('73d80e8a-3905-43b1-9af1-67f3e5edc223', array['fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5','a14b15b4-6bea-4291-8e32-eb4de3228c0d','fa443fba-3a6e-461c-831e-8d64da5f62e4','2654027b-2f7e-4380-986e-6c154d185ff2','5066dd63-26cb-4f70-87b8-46c6a65d5d44','b939012a-9c98-43d9-bccf-3b699d7e308a'], 1),('63400ad5-a686-41cb-80df-e16b98e092cc', array['fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5','a14b15b4-6bea-4291-8e32-eb4de3228c0d','fa443fba-3a6e-461c-831e-8d64da5f62e4','2654027b-2f7e-4380-986e-6c154d185ff2','5066dd63-26cb-4f70-87b8-46c6a65d5d44','b939012a-9c98-43d9-bccf-3b699d7e308a'], 2),('f657dad4-b815-4d28-96d4-36ee080f1a67', array['fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5','a14b15b4-6bea-4291-8e32-eb4de3228c0d','fa443fba-3a6e-461c-831e-8d64da5f62e4','2654027b-2f7e-4380-986e-6c154d185ff2','5066dd63-26cb-4f70-87b8-46c6a65d5d44','b939012a-9c98-43d9-bccf-3b699d7e308a'], 3);
                DROP TABLE IF EXISTS kingdoms;
                CREATE TABLE kingdoms (
                id varchar (36),
                game_id varchar(36),
                user_id varchar(36),
                food int,
                wood int,
                stone int,
                gold int,
                workers_total int,
                workers_reserve int,
                solders_total int,
                solders_reserve int,
                food_production int,
                wood_production int,
                stone_production int,
                gold_production int,
                PRIMARY KEY (id)
                );
                INSERT INTO kingdoms(id, game_id, user_id, food, wood, stone, gold, workers_total, workers_reserve, solders_total, solders_reserve, food_production, wood_production, stone_production, gold_production) VALUES ('b9be29e8-0f47-444c-9e32-5e5eae9ce9da','73d80e8a-3905-43b1-9af1-67f3e5edc223','fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('bb8e30bc-575d-4f6f-b883-978e896fae2c','63400ad5-a686-41cb-80df-e16b98e092cc','fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('a1b0fc96-b3e5-4f0a-baed-7d1fa6c35c7e','f657dad4-b815-4d28-96d4-36ee080f1a67','fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('cd18b634-c9a0-49a2-8d51-e0d8c37355a8','73d80e8a-3905-43b1-9af1-67f3e5edc223','a14b15b4-6bea-4291-8e32-eb4de3228c0d', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('177f2ad7-d1df-4488-b71f-f79b23f082da','63400ad5-a686-41cb-80df-e16b98e092cc','a14b15b4-6bea-4291-8e32-eb4de3228c0d', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('ecfab881-1567-4052-8b1b-a5396d138bec','f657dad4-b815-4d28-96d4-36ee080f1a67','a14b15b4-6bea-4291-8e32-eb4de3228c0d', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('595e4d57-465d-4660-9dff-85ba6d95b468','73d80e8a-3905-43b1-9af1-67f3e5edc223','fa443fba-3a6e-461c-831e-8d64da5f62e4', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('9872abaf-f16b-43ee-8003-dab0807b6539','63400ad5-a686-41cb-80df-e16b98e092cc','fa443fba-3a6e-461c-831e-8d64da5f62e4', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('43f3df5a-ff36-4910-8ffb-47cb712f25cd','f657dad4-b815-4d28-96d4-36ee080f1a67','fa443fba-3a6e-461c-831e-8d64da5f62e4', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('47f753ac-4e67-4ac7-9c8f-6189a68076b1','73d80e8a-3905-43b1-9af1-67f3e5edc223','2654027b-2f7e-4380-986e-6c154d185ff2', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('687c9f91-6728-4e5a-b38a-eeff4e2427a4','63400ad5-a686-41cb-80df-e16b98e092cc','2654027b-2f7e-4380-986e-6c154d185ff2', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('41d46bff-3032-4cc9-b19a-869aa494b402','f657dad4-b815-4d28-96d4-36ee080f1a67','2654027b-2f7e-4380-986e-6c154d185ff2', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('b180212d-0eea-4194-b65f-53ccb28290d1','73d80e8a-3905-43b1-9af1-67f3e5edc223','5066dd63-26cb-4f70-87b8-46c6a65d5d44', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('b9dc8ec9-48f0-40ee-89a6-2f52dc2ae3a8','63400ad5-a686-41cb-80df-e16b98e092cc','5066dd63-26cb-4f70-87b8-46c6a65d5d44', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('cd056c0c-9e9c-4779-9b90-6f84e4917f46','f657dad4-b815-4d28-96d4-36ee080f1a67','5066dd63-26cb-4f70-87b8-46c6a65d5d44', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('281f5006-4f09-4d52-a665-2e32e7adeb11','73d80e8a-3905-43b1-9af1-67f3e5edc223','b939012a-9c98-43d9-bccf-3b699d7e308a', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('b3c6cb0e-bef4-4cfe-b2a3-a98bfa689f10','63400ad5-a686-41cb-80df-e16b98e092cc','b939012a-9c98-43d9-bccf-3b699d7e308a', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('e60c5538-d5cf-4aa8-b7a1-6679dae3eb99','f657dad4-b815-4d28-96d4-36ee080f1a67','b939012a-9c98-43d9-bccf-3b699d7e308a', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0);
                DROP TABLE IF EXISTS territories;
                CREATE TABLE territories (
                id varchar(36),
                game_id varchar(36),
                kingdom_id varchar(36),
                stat_ID int,
                position int,
                army_id varchar(36),
                buildings text ARRAY,
                PRIMARY KEY (id)
                );
                INSERT INTO territories(id, game_id, kingdom_id, stat_ID, position, army_id, buildings) VALUES ('9d299f53-dc1f-405d-8514-9d171a6cd874','73d80e8a-3905-43b1-9af1-67f3e5edc223','b9be29e8-0f47-444c-9e32-5e5eae9ce9da', 1, 1, null, null),('4a0f536f-a3ad-42a7-b69a-85eaca213b8a','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 8, 2, null, null),('67eaefe9-df5f-42db-979c-1937411d7b78','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 7, 3, null, null),('57a1ce8a-9170-4abc-a2c2-64f7c1cfb9b3','73d80e8a-3905-43b1-9af1-67f3e5edc223','281f5006-4f09-4d52-a665-2e32e7adeb11', 6, 4, null, null),('d0323030-3e49-4cbe-8fba-7be3a44d23db','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 9, 5, null, null),('fa9cabea-9856-40f7-ad5e-48af24b9e691','73d80e8a-3905-43b1-9af1-67f3e5edc223','cd18b634-c9a0-49a2-8d51-e0d8c37355a8', 2, 6, null, null),('3b59e9b9-a3f2-430c-9c7d-4fa59f412cdb','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 7, 7, null, null),('2ec2f676-7e40-4f5d-8a17-3a755070439c','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 8, 8, null, null),('3945bbc7-978b-4718-975e-24c5861d147b','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 9, 9, null, null),('dcfb760a-851e-4fc4-8ae7-8f36cc4e34e7','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 10, 10, null, null),('749a71db-8e45-4d8e-b799-d018067d2d5e','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 9, 11, null, null),('7f68a879-b9c7-4b6f-9d99-189b13569795','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 8, 12, null, null),('21ebfefb-2b88-411e-9c47-22946ceef7a1','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 7, 13, null, null),('746b5b2b-7592-42c5-9e11-205a0b289952','73d80e8a-3905-43b1-9af1-67f3e5edc223','b180212d-0eea-4194-b65f-53ccb28290d1', 5, 14, null, null),('32fc9490-0051-4538-9d20-a7e3efc5f16c','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 9, 15, null, null),('870929ba-e52b-4b21-b563-6c3dd5dc8106','73d80e8a-3905-43b1-9af1-67f3e5edc223','595e4d57-465d-4660-9dff-85ba6d95b468', 3, 16, null, null),('cc181e2e-a587-44ea-acaa-8d8d71084108','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 7, 17, null, null),('455e86e7-6514-418a-a65e-aa7ea7f1995d','73d80e8a-3905-43b1-9af1-67f3e5edc223','null', 8, 18, null, null),('2ed7dec8-707a-4161-87d7-b0c9fa85e1d6','73d80e8a-3905-43b1-9af1-67f3e5edc223','47f753ac-4e67-4ac7-9c8f-6189a68076b1', 4, 19, null, null),('71e46192-2b2f-4fb1-a648-89aaf9f3598b','63400ad5-a686-41cb-80df-e16b98e092cc','bb8e30bc-575d-4f6f-b883-978e896fae2c', 1, 1, null, null),('6baeb982-cb8f-4185-9419-8c7afea98381','63400ad5-a686-41cb-80df-e16b98e092cc','null', 8, 2, null, null),('d8e5b2ce-7049-4fed-b07a-ab7f045ece13','63400ad5-a686-41cb-80df-e16b98e092cc','null', 7, 3, null, null),('5b116699-305f-4243-9eeb-bf18b426bce4','63400ad5-a686-41cb-80df-e16b98e092cc','b3c6cb0e-bef4-4cfe-b2a3-a98bfa689f10', 6, 4, null, null),('dc1aaee5-7939-45bd-81a8-5cc86f593500','63400ad5-a686-41cb-80df-e16b98e092cc','null', 9, 5, null, null),('1c98b1f5-3f7a-4097-b7d2-cdb03476f7b6','63400ad5-a686-41cb-80df-e16b98e092cc','177f2ad7-d1df-4488-b71f-f79b23f082da', 2, 6, null, null),('87812d36-cd38-4417-97eb-0e8b45585d11','63400ad5-a686-41cb-80df-e16b98e092cc','null', 7, 7, null, null),('2dc8c540-c8aa-4ee4-8538-9005b42f7e01','63400ad5-a686-41cb-80df-e16b98e092cc','null', 8, 8, null, null),('033af147-4e1d-415f-abbc-030a6ea28ee3','63400ad5-a686-41cb-80df-e16b98e092cc','null', 9, 9, null, null),('5ba485a2-bc0b-450e-a9cb-8ce0bf7c2d31','63400ad5-a686-41cb-80df-e16b98e092cc','null', 10, 10, null, null),('82f56b74-c8f7-4783-83c5-d6ffba58b6f3','63400ad5-a686-41cb-80df-e16b98e092cc','null', 9, 11, null, null),('2cf49f59-0c8c-47e9-b28a-c84bc8509ab7','63400ad5-a686-41cb-80df-e16b98e092cc','null', 8, 12, null, null),('841671a7-4039-42d2-be8d-6b8050bd226b','63400ad5-a686-41cb-80df-e16b98e092cc','null', 7, 13, null, null),('d23275ed-f448-476e-a2a0-7e4f82c39788','63400ad5-a686-41cb-80df-e16b98e092cc','b9dc8ec9-48f0-40ee-89a6-2f52dc2ae3a8', 5, 14, null, null),('3b4bce96-cfbb-428c-b0a3-a430ed6308eb','63400ad5-a686-41cb-80df-e16b98e092cc','null', 9, 15, null, null),('84e8c080-c17d-4932-8e5d-d3bf92a7df5e','63400ad5-a686-41cb-80df-e16b98e092cc','9872abaf-f16b-43ee-8003-dab0807b6539', 3, 16, null, null),('0d23c040-f846-4df0-b808-dcea92855030','63400ad5-a686-41cb-80df-e16b98e092cc','null', 7, 17, null, null),('6a8ba83c-5e10-4e84-964d-300c0b8f4870','63400ad5-a686-41cb-80df-e16b98e092cc','null', 8, 18, null, null),('3fad0217-1966-441a-b5bf-e64d5cb99ce1','63400ad5-a686-41cb-80df-e16b98e092cc','687c9f91-6728-4e5a-b38a-eeff4e2427a4', 4, 19, null, null),('573c06e6-ebfb-4f3f-aade-1418a46c876f','f657dad4-b815-4d28-96d4-36ee080f1a67','a1b0fc96-b3e5-4f0a-baed-7d1fa6c35c7e', 1, 1, null, null),('2bf95c22-9380-414b-a2c3-89cfe5bb511f','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 8, 2, null, null),('6ecc24e0-1762-4560-9df2-996db585761a','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 7, 3, null, null),('04566680-3c69-4c43-96de-aa7f7ad5fd85','f657dad4-b815-4d28-96d4-36ee080f1a67','e60c5538-d5cf-4aa8-b7a1-6679dae3eb99', 6, 4, null, null),('91564682-3228-4a5f-b4ec-c8d4e50a3784','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 9, 5, null, null),('0a8cc469-14fe-4d54-af48-8bbbd7ab421c','f657dad4-b815-4d28-96d4-36ee080f1a67','ecfab881-1567-4052-8b1b-a5396d138bec', 2, 6, null, null),('8fa495e9-6b0a-461d-b0eb-41d7b14b7a87','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 7, 7, null, null),('4f4d2f71-2286-436e-a0c9-0d1e4d532397','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 8, 8, null, null),('e9f786b7-224e-4a6b-940b-0cfaae145e15','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 9, 9, null, null),('278f7690-5eaa-44ae-84ad-a7dff24fc4b1','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 10, 10, null, null),('9c4a4dee-dd7c-4dd4-9d15-fc2a861f268c','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 9, 11, null, null),('8f2fb0bc-81bc-40b2-bf69-ecd02aac2234','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 8, 12, null, null),('2dc472bd-cb53-4bd0-8622-9ad16f49fab3','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 7, 13, null, null),('4654bcdb-edb8-44a6-990a-91c29ada995f','f657dad4-b815-4d28-96d4-36ee080f1a67','cd056c0c-9e9c-4779-9b90-6f84e4917f46', 5, 14, null, null),('dd7686ae-a200-4bb2-af6c-235678281e7e','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 9, 15, null, null),('c3798801-b5fc-4236-97d5-d1af53aa56ee','f657dad4-b815-4d28-96d4-36ee080f1a67','43f3df5a-ff36-4910-8ffb-47cb712f25cd', 3, 16, null, null),('1aefb6d9-b178-408e-a855-620fc0fed014','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 7, 17, null, null),('b1b2eebb-eab3-4af6-8429-3a67eec3b705','f657dad4-b815-4d28-96d4-36ee080f1a67','null', 8, 18, null, null),('2c2d6a46-b544-41fc-a918-f268c99a3f9d','f657dad4-b815-4d28-96d4-36ee080f1a67','41d46bff-3032-4cc9-b19a-869aa494b402', 4, 19, null, null);
                DROP TABLE IF EXISTS armies;
                CREATE TABLE armies (
                id varchar (36),
                size int,
                fire_swords int,
                fire_armors int,
                lightning_swords int,
                lightning_armors int,
                holy_swords int,
                holy_armors int,
                water_swords int,
                water_armors int,
                earth_swords int,
                earth_armors int,
                shadow_swords int,
                shadow_armors int,
                PRIMARY KEY (id)
                );
                DROP TABLE IF EXISTS heros;
                CREATE TABLE heros (
                id varchar (36),
                health int,
                damage int,
                equipment_ID int,
                army_id varchar (36),
                building_id varchar (36),
                PRIMARY KEY (id)
                );
                DROP TABLE IF EXISTS buildings;
                CREATE TABLE buildings (
                id varchar (36),
                stat_ID int,
                territory_id varchar(36),
                occupancy int,
                PRIMARY KEY (id)
                );`.replace(allSpaces, withNothing))
    })
  })

  describe('newGame', () => {
    it('returns a query to insert new game data', () => {
      assert.equal(queries.newGame(testGame1).replace(allSpaces, withNothing), `
                INSERT INTO games(id, players, turn_number) VALUES ('36f597f5-e019-430a-92b3-69c8ef53ca6e', array['5b934d1a-62d1-4442-9449-e4837453a84d','92066163-4eca-4115-9b1a-a4a000ae7049','0dbea2d8-1dcb-49a7-b5d2-2069db317f2e','5e873d18-f935-49b4-afcd-15226b08f425','91513852-a62a-45b0-8fdb-0f5e6db3ac5d','4b509ec8-f022-44b7-9320-60fca2ddd958'], 1);
                INSERT INTO kingdoms(id, game_id, user_id, food, wood, stone, gold, workers_total, workers_reserve, solders_total, solders_reserve, food_production, wood_production, stone_production, gold_production) VALUES ('5b934d1a-62d1-4442-9449-e4837453a84d','36f597f5-e019-430a-92b3-69c8ef53ca6e','fb5ab0a5-a590-4e00-ba2e-2a7d5e5b2aa5', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('92066163-4eca-4115-9b1a-a4a000ae7049','36f597f5-e019-430a-92b3-69c8ef53ca6e','a14b15b4-6bea-4291-8e32-eb4de3228c0d', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('0dbea2d8-1dcb-49a7-b5d2-2069db317f2e','36f597f5-e019-430a-92b3-69c8ef53ca6e','fa443fba-3a6e-461c-831e-8d64da5f62e4', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('5e873d18-f935-49b4-afcd-15226b08f425','36f597f5-e019-430a-92b3-69c8ef53ca6e','2654027b-2f7e-4380-986e-6c154d185ff2', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('91513852-a62a-45b0-8fdb-0f5e6db3ac5d','36f597f5-e019-430a-92b3-69c8ef53ca6e','5066dd63-26cb-4f70-87b8-46c6a65d5d44', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0),('4b509ec8-f022-44b7-9320-60fca2ddd958','36f597f5-e019-430a-92b3-69c8ef53ca6e','b939012a-9c98-43d9-bccf-3b699d7e308a', 100, 100, 100, 100, 10, 10, 10, 10, 0, 0, 0, 0);
                INSERT INTO territories(id, game_id, kingdom_id, stat_ID, position, army_id, buildings) VALUES ('8622e5c8-6e21-4014-96e7-c1927380952f','36f597f5-e019-430a-92b3-69c8ef53ca6e','5b934d1a-62d1-4442-9449-e4837453a84d', 1, 1, null, null),('b86295e4-8c05-429b-b06c-2468335f353e','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 8, 2, null, null),('a63edb60-9445-4c9b-a915-53d889cb7469','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 7, 3, null, null),('792bc753-bc5b-4b0f-a96c-62060ab59d48','36f597f5-e019-430a-92b3-69c8ef53ca6e','4b509ec8-f022-44b7-9320-60fca2ddd958', 6, 4, null, null),('22abdbb2-7b38-41e2-982c-ec3d1df87f3c','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 9, 5, null, null),('6fd65e65-9eba-4ce8-8e39-349733c054ed','36f597f5-e019-430a-92b3-69c8ef53ca6e','92066163-4eca-4115-9b1a-a4a000ae7049', 2, 6, null, null),('a01e61d7-9152-4bc9-946b-5be842e91b87','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 7, 7, null, null),('1c85dd63-6a1b-4f88-9dcd-532ecc563ecf','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 8, 8, null, null),('9a46b018-e532-454f-ad2c-631c0a7bcb15','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 9, 9, null, null),('74d4ef4b-3379-45fe-b357-7d2982813637','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 10, 10, null, null),('fbd8dd7e-5b46-4d46-af97-13efa0097916','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 9, 11, null, null),('2db65746-d7df-4ff0-865c-63ef16d21f6b','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 8, 12, null, null),('973afcf4-e42e-411d-a901-3f63a3d6738a','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 7, 13, null, null),('444dfd98-a363-4b95-87da-8001c8b9f747','36f597f5-e019-430a-92b3-69c8ef53ca6e','91513852-a62a-45b0-8fdb-0f5e6db3ac5d', 5, 14, null, null),('fa7f854e-0367-4168-989d-725d46731358','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 9, 15, null, null),('f644f3c3-87a0-434d-8e46-31bc122f2a09','36f597f5-e019-430a-92b3-69c8ef53ca6e','0dbea2d8-1dcb-49a7-b5d2-2069db317f2e', 3, 16, null, null),('5d4f60de-ecab-40fc-9309-215928460f22','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 7, 17, null, null),('ac81061e-6c86-4d0e-8df2-e5f8b79b25ff','36f597f5-e019-430a-92b3-69c8ef53ca6e','null', 8, 18, null, null),('9bb54169-8d74-4b72-937b-e5d3b77e9d7b','36f597f5-e019-430a-92b3-69c8ef53ca6e','5e873d18-f935-49b4-afcd-15226b08f425', 4, 19, null, null);`.replace(allSpaces, withNothing))
    })
  })

  describe('selectKingdomsWithGameId', () => {
    it('returns a query to select a kingdom with the matching gameId', () => {
      assert.equal(queries.selectKingdomsWithGameId({ id: 'testGameId' }).replace(allSpaces, withNothing), `
                SELECT * from kingdoms
                WHERE game_id = 'testGameId';
                `.replace(allSpaces, withNothing))
    })
  })

  describe('selectTerritoriesWithGameId', () => {
    it('returns a query to select all territories with the matching gameId', () => {
      assert.equal(queries.selectTerritoriesWithGameId({ id: 'testGameId' }).replace(allSpaces, withNothing), `
                SELECT * from territories
                WHERE game_id = 'testGameId';
                `.replace(allSpaces, withNothing))
    })
  })

  describe('selectTurnFromGames', () => {
    it('returns a query to select the turn number of the game with matching id', () => {
      assert.equal(queries.selectTurnFromGames({ id: 'testGameId' }).replace(allSpaces, withNothing), `
                SELECT turn_number from games
                WHERE id = 'testGameId';
                `.replace(allSpaces, withNothing))
    })
  })

  describe('updateKingdoms', () => {
    it('returns a query to update all the kingdoms of a game with the new turn data', () => {
      assert.equal(queries.updateKingdoms(testGame2.kingdoms).replace(allSpaces, withNothing), `
                UPDATE kingdoms
                SET food = 220,
                wood = 136,
                stone = 108,
                gold = 100,
                workers_total = 10,
                workers_reserve = 0,
                solders_total = 10,
                solders_reserve = 10,
                food_production = 6,
                wood_production = 3,
                stone_production = 1,
                gold_production = 0
                WHERE id = 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da';

                UPDATE kingdoms
                SET food = 100,
                wood = 100,
                stone = 100,
                gold = 100,
                workers_total = 10,
                workers_reserve = 10,
                solders_total = 10,
                solders_reserve = 10,
                food_production = 0,
                wood_production = 0,
                stone_production = 0,
                gold_production = 0
                WHERE id = 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8';

                UPDATE kingdoms
                SET food = 100,
                wood = 100,
                stone = 100,
                gold = 100,
                workers_total = 10,
                workers_reserve = 10,
                solders_total = 10,
                solders_reserve = 10,
                food_production = 0,
                wood_production = 0,
                stone_production = 0,
                gold_production = 0
                WHERE id = '595e4d57-465d-4660-9dff-85ba6d95b468';

                UPDATE kingdoms
                SET food = 100,
                wood = 100,
                stone = 100,
                gold = 100,
                workers_total = 10,
                workers_reserve = 10,
                solders_total = 10,
                solders_reserve = 10,
                food_production = 0,
                wood_production = 0,
                stone_production = 0,
                gold_production = 0
                WHERE id = '47f753ac-4e67-4ac7-9c8f-6189a68076b1';

                UPDATE kingdoms
                SET food = 100,
                wood = 100,
                stone = 100,
                gold = 100,
                workers_total = 10,
                workers_reserve = 10,
                solders_total = 10,
                solders_reserve = 10,
                food_production = 0,
                wood_production = 0,
                stone_production = 0,
                gold_production = 0
                WHERE id = 'b180212d-0eea-4194-b65f-53ccb28290d1';

                UPDATE kingdoms
                SET food = 100,
                wood = 100,
                stone = 100,
                gold = 100,
                workers_total = 10,
                workers_reserve = 10,
                solders_total = 10,
                solders_reserve = 10,
                food_production = 0,
                wood_production = 0,
                stone_production = 0,
                gold_production = 0
                WHERE id = '281f5006-4f09-4d52-a665-2e32e7adeb11';
                `.replace(allSpaces, withNothing))
    })
  })

  describe('updateTerritories', () => {
    it('returns a query to update all the territories of a game with new turn data', () => {
      assert.equal(queries.updateTerritories(testGame2.territories).replace(allSpaces, withNothing), `
                UPDATE territories
                SET kingdom_id = 'b9be29e8-0f47-444c-9e32-5e5eae9ce9da',
                army_id = 'null',
                buildings = null
                WHERE id = '9d299f53-dc1f-405d-8514-9d171a6cd874';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '4a0f536f-a3ad-42a7-b69a-85eaca213b8a';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '67eaefe9-df5f-42db-979c-1937411d7b78';

                UPDATE territories
                SET kingdom_id = '281f5006-4f09-4d52-a665-2e32e7adeb11',
                army_id = 'null',
                buildings = null
                WHERE id = '57a1ce8a-9170-4abc-a2c2-64f7c1cfb9b3';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = 'd0323030-3e49-4cbe-8fba-7be3a44d23db';

                UPDATE territories
                SET kingdom_id = 'cd18b634-c9a0-49a2-8d51-e0d8c37355a8',
                army_id = 'null',
                buildings = null
                WHERE id = 'fa9cabea-9856-40f7-ad5e-48af24b9e691';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '3b59e9b9-a3f2-430c-9c7d-4fa59f412cdb';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '2ec2f676-7e40-4f5d-8a17-3a755070439c';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '3945bbc7-978b-4718-975e-24c5861d147b';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = 'dcfb760a-851e-4fc4-8ae7-8f36cc4e34e7';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '749a71db-8e45-4d8e-b799-d018067d2d5e';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '7f68a879-b9c7-4b6f-9d99-189b13569795';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '21ebfefb-2b88-411e-9c47-22946ceef7a1';

                UPDATE territories
                SET kingdom_id = 'b180212d-0eea-4194-b65f-53ccb28290d1',
                army_id = 'null',
                buildings = null
                WHERE id = '746b5b2b-7592-42c5-9e11-205a0b289952';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '32fc9490-0051-4538-9d20-a7e3efc5f16c';

                UPDATE territories
                SET kingdom_id = '595e4d57-465d-4660-9dff-85ba6d95b468',
                army_id = 'null',
                buildings = null
                WHERE id = '870929ba-e52b-4b21-b563-6c3dd5dc8106';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = 'cc181e2e-a587-44ea-acaa-8d8d71084108';

                UPDATE territories
                SET kingdom_id = 'null',
                army_id = 'null',
                buildings = null
                WHERE id = '455e86e7-6514-418a-a65e-aa7ea7f1995d';

                UPDATE territories
                SET kingdom_id = '47f753ac-4e67-4ac7-9c8f-6189a68076b1',
                army_id = 'null',
                buildings = null
                WHERE id = '2ed7dec8-707a-4161-87d7-b0c9fa85e1d6';
                `.replace(allSpaces, withNothing))
    })
  })

  describe('updateGameTurn', () => {
    it('returns a query to update the game with the new turn number', () => {
      assert.equal(queries.updateGameTurn(testGame2).replace(allSpaces, withNothing), `
                UPDATE games
                SET turn_number = 5
                WHERE id = '73d80e8a-3905-43b1-9af1-67f3e5edc223';
                `.replace(allSpaces, withNothing))
    })
  })
})
