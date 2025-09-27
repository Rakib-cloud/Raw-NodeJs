
//Dependencies
const http = require('http');

const { handleReqRes } = require('./helpers/reqreshandle');

//App object - module scaffolding

const app = {};

//Configuration
app.config = {
    port: 3000,
};


app.createServer = () => {
    const server = http.createServer(app.handleRequestRes);
    server.listen(app.config.port, () => {
            console.log(`Listening to port ${app.config.port}`)
        }
    )

}
//Handle request response
app.handleRequestRes =handleReqRes
//Start the server
app.createServer();