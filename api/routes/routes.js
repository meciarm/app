/*     Files     */
var config  = require('../../config');

/*     Libraries     */
var express = require('express');

/*     Variables     */
var router  = express.Router();

/*     Handlers     */
var testHandlers = require('../handlers/testHandlers');

/*     Authorizations     */

/*     API     */
router.get('/test', testHandlers.getTestMessage);
router.get('/testGetAll', testHandlers.getTestAll);
router.get('/testGet', testHandlers.getTestById);
router.get('/testPost', testHandlers.postTest);

/*     API error handling     */
router.use(function(err, req, res, next) {
    if (err.errToLog) {
        console.log(err.errToLog.stack);
    }
    var outputErr = {
        type: err.type || "UnknownError",
        message: err.message || "Unknown error",
        status: err.statusCode || 500
    };

    console.log('Response error: ' + JSON.stringify(outputErr));
    //errorLogger(outputErr);

    res.status(outputErr.status).json(outputErr).end();
});


module.exports = router;
