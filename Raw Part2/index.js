//Dependencies
const http = require('http');

const {handleReqRes} = require('./helpers/reqreshandle');
const environment = require('./helpers/enviromnent');
const data = require('./lib/data');

//App object - module scaffolding
const app = {};

//create a file and store data

// data.create('test', 'newFile', {name: 'Bangladesh', language: "Bangla"}, (err) => {
//     console.log('this was the error', err);
// })

//read file data
// data.read('test','newFile', (err, data) => {
//     console.log('this was the error', err, 'and this was the data', data);
// })

//updater the file data
// data.update('test', 'newFile', {name: 'England', language: "English"}, (err) => {
//     console.log(err);
// })

//file delete

// data.delete('test', 'newFile',  (err) => {
//     console.log(err);
// })


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