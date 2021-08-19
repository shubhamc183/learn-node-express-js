const server = require('./server');
const container = require('./di/index')

server(container)
.then((app) => {
    console.log(`Server started succesfully, running on port.`);
    app.on('close', () => container.dispose());
});