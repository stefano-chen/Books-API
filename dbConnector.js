const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

let database;

module.exports = {
    connect: (databaseName) => {
        if (database)
            return cachedClient;
        try {
            const client = new MongoClient(uri); // Connects to MongoDB DBMS
            database = client.db(databaseName); // Use the desired database
            return database;
        }catch (err) {
            return null;
        }
    }
}