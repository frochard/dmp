/**
 * Created by fred on 23/11/16.
 */
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/dmp", function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
});