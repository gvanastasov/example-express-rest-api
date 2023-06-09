const sqlite3   = require("better-sqlite3"),
    knex        = require("knex"),
    { faker }   = require("@faker-js/faker");

/**
 * @type {sqlite3.Database}
 */
let db = new sqlite3(":memory:", { verbose: console.log });

/**
 * @type {knex.Knex}
 */
let query = knex({
    client: "better-sqlite3",
    dialect: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: ":memory:"
    }
});

const ENTITY = {
    USER: "user",
};

const startDb = async () => {
    try {
        console.log("Connected to the in-memory SQlite database.");
        
        await createSchema();
        await seedDb();
    } catch (err) {
        console.error(err?.message);
    }
};

const stopDb = function() {
    if (!db) {
        return console.log("Database not initialized.");
    }

    try {
        query.destroy();
        db.close();

        console.log("Connection to the in-memory SQlite database closed.");
    } catch (err) {
        console.error(err?.message);
    }
};

const createSchema = async function() {
    await query
        .schema
        .createTable(ENTITY.USER, table => {
            table.increments("id");
            table.string("username");
            table.string("email");
        });
};

const seedDb = async function() {
    await query(ENTITY.USER)
        .insert(
            Array.from(
                { length: 10 }, () => ({
                    username: faker.internet.userName(),
                    email: faker.internet.email(), 
                })
            )
        );
};

module.exports = { query, startDb, stopDb, ENTITY };
