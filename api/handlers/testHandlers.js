/*     Files     */
var errors = require('../errors/errors');

/*     Variables     */
var testCollectionName = "test";


function getTestTextMessage(req, res, next) {
    res.send('Test successful!');  
}

function getTestJsonAll(req, res, next) {
    db.collection(testCollectionName).find({}).toArray(function(err, docs) {
        if (err) {
            errors.NotFound("Failed to get test data");
        } else {
            res.status(200).json(docs);
        }
    });
}

function getTestJsonById(req, res, next) {
    db.collection(testCollectionName).findOne({_id: new mongodb.ObjectID(req.params.id)}, function(err, doc) {
        if (err) {
            errors.NotFound("Failed to get test datum");
        } else {
            res.status(200).json(doc);
        }
    });
}

function postTestJson(req, res, next) {
    db.collection(testCollectionName).insertOne(req.body, function(err, doc) {
        if (err) {
            errors.InternalServerError("Failed to create new contact");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
}

module.exports = {
    getTestMessage: getTestTextMessage,
    getTestAll: getTestJsonAll,
    getTestById: getTestJsonById,
    postTest: postTestJson,
};
