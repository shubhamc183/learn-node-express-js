// Simplies try-catch async-await
function invoker(promise){
    return promise
        .then(data => [null, data])
        .catch(error => [error, null])
}

module.exports = invoker;