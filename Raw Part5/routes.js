const {sampleHandlers} = require('./handlers/routeHandlers/samplehandlers');
const {userHandlers} = require('./handlers/routeHandlers/userHandlers');
const {tokenHandler} = require('./handlers/routeHandlers/tokenHandlers');
const {checkHandler} = require('./handlers/routeHandlers/checkHandlers');

const routes = {
    "sample": sampleHandlers,
    "user": userHandlers,
    "token": tokenHandler,
    "check":checkHandler
}

module.exports = routes;