const Database = require("better-sqlite3");

let db = null;

const startDb = function() {
    try {
        db = new Database(":memory:", { verbose: console.log });
        console.log("Connected to the in-memory SQlite database.");
    } catch (err) {
        console.error(err?.message);
    }
};

const stopDb = function() {
    if (!db) {
        return console.log("Database not initialized.");
    }

    try {
        db.close();
        console.log("Connection to the in-memory SQlite database closed.");
    } catch (err) {
        console.error(err?.message);
    }
};

module.exports = { db, startDb, stopDb };
