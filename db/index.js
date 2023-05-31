const sql       = require("better-sqlite3"),
    knex        = require("knex"),
    { faker }   = require("@faker-js/faker");
/**
 * @type {sql.Database}
 */
let db = null;

/**
 * @type {knex.Knex}
 */
let query = null;

const startDb = function() {
    try {
        db = new sql(":memory:", { verbose: console.log });
        query = knex({
            client: "better-sqlite3",
            dialect: "sqlite3",
            useNullAsDefault: true,
            connection: {
                filename: ":memory:"
            }
        });
        console.log("Connected to the in-memory SQlite database.");
        
        initDb();
        seedDb();
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

const initDb = function() {
    query
        .schema
        .createTable("users", table => {
            table.increments("id");
            table.string("username");
            table.string("email");
        });
};

const seedDb = function() {
    query("users")
        .insert(
            Array.from(
                { length: 10 }, () => ({
                    username: faker.internet.userName(),
                    email: faker.internet.email(), 
                })
            )
        );
};

module.exports = { query, startDb, stopDb };
