const {app, port} = require('./server');

app.listen(port, () => {
    console.log(`App started at Port:${port}`);
})