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
    //Creation of fingerprints collection
    var collection = db.collection('fingerprints');

    //Documents storage
    var docs = [{mykey:1,fingerprint:'fp1'}, {mykey:2,fingerprint:'fp2'}, {mykey:3,fingerprint:'fp3'}];
    collection.insert(docs, {w:1}, function(err, result) {
    });

    //retrieve a document from key
    collection.findOne({mykey: 1}, function (err, item) {
        console.log(item);
    });

});


