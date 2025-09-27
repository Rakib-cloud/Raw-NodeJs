const handler = {}


handler.notFoundHandlers = (requestProperties, callback) => {
    callback(404, {
        message: 'Not Found',
    })
}
module.exports = handler