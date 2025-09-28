//Dependencies
const http = require('http');

const {handleReqRes} = require('./helpers/reqreshandle');
const environment = require('./helpers/enviromnent');

//App object - module scaffolding
const app = {};


app.createServer = () => {
    const server = http.createServer(app.handleRequestRes);
    server.listen(environment.port, () => {
            console.log(`Listening to port ${environment.port}`)
        }
    )

}
//Handle request response
app.handleRequestRes = handleReqRes
//Start the server
app.createServer();