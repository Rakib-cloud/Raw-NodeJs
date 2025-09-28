const handler = {}


handler.sampleHandlers = (requestProperties, callback) => {
    callback(200, {
        "message": "This is a sample url",
    })
}
module.exports = handler