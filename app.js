/*     Files     */
var config      = require("./config.js");
var apiRoutes   = require('./api/routes/routes');

/*     Libraries     */
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var mongodb     = require("mongodb");

/*     Variables     */
var app     = express();
var port    = process.env.PORT || 8080;
var db;
var server;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(config.MongoDBUrl(), function (error, database) {

    // Check if connection to MongoDB at config.MongoDBUrl failed.
    if (error) {
        console.log(error);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app on the port AFTER the connection is ready to avoid 
    // errors from database connections before the connection is established.
    server = app.listen(process.env.PORT || 8080, function () {
        console.log("App now running on port ", port);
    });

});

// Add API routes to app.
app.use('/api', apiRoutes);