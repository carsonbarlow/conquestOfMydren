// This file contains potentially useful snippits of code.

const createTablesQuery = `
    CREATE TABLE users (
    id varchar (36),
    name varchar (20),
    games text ARRAY,
    PRIMARY KEY (id)
    );
    CREATE TABLE games (
    id varchar (36),
    players text ARRAY,
    turn_number int,
    PRIMARY KEY (id)
    );
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
    PRIMARY KEY (id)
    );
    CREATE TABLE territories (
    id varchar (36),
    stat_ID int,
    game_id varchar (36),
    kingdom_id varchar (36),
    army_id varchar (36),
    PRIMARY KEY (id)
    );
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
    CREATE TABLE heros (
    id varchar (36),
    health int,
    damage int,
    equipment_ID int,
    army_id varchar (36),
    building_id varchar (36),
    PRIMARY KEY (id)
    );
    CREATE TABLE buildings (
    id varchar (36),
    stat_ID int,
    territory_id varchar(36),
    occupancy int,
    PRIMARY KEY (id)
    );
`;

const insertUserQuery = `INSERT INTO users(id, name, games) VALUES('${ignatius.id}', '${ignatius.name}', array[${ignatius.games}])`;

const dropTablesQuery = `DROP TABLE users, games, kingdoms, territories, armies, heros, buildings`;




client.query(resetDBTables,
    (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err.message);
        }

    });

//getGameStateForPlayer('b9be29e8-0f47-444c-9e32-5e5eae9ce9da');