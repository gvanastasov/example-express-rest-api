const MongodbMemoryServer = require("mongodb-memory-server"),
    mongoose = require("mongoose");

const mongoConfig = require("../config/mongo.conf");

const initDb = async function() {
    const mongoServer = await MongodbMemoryServer.MongoMemoryServer.create(mongoConfig);

    mongoServer.getUri().then((uri) => {
        console.log(`MongoDB server running at: ${uri.toStrong()}`);
        mongoose.connect(uri);
        mongoose.Promise = global.Promise;
    });
};

module.exports = { initDb };
