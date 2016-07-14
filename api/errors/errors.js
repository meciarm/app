var util = require('util');

module.exports.NotFound = function(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message || "Not found";
    this.statusCode = 404;
    this.type = 'NotFound'
};
util.inherits(module.exports.NotFound, Error);

module.exports.RuntimeError = function(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    this.statusCode = 500;
    this.type = 'RuntimeError'
};
util.inherits(module.exports.RuntimeError, Error);

module.exports.InternalServerError = function(err) {
    Error.captureStackTrace(this, this.constructor);
    this.errToLog = err;
    this.message = "Internal Server Error";
    this.statusCode = 500;
    this.type = 'InternalServerError'
};
util.inherits(module.exports.InternalServerError, Error);