const {sampleHandlers} = require('./handlers/routeHandlers/samplehandlers');
const {userHandlers} = require('./handlers/routeHandlers/userHandlers');
const {tokenHandler} = require('./handlers/routeHandlers/tokenHandlers');

const routes = {
    "sample": sampleHandlers,
    "user": userHandlers,
    "token": tokenHandler
}

module.exports = routes;