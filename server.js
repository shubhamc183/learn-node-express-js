const express = require("express");
const apiRouter = require("./api/router");

const server = (container) => {
    return new Promise((resolve, reject) => {
        let port;
        try{
            port = container.resolve('serverConfig').port;
        }
        catch(err){
            return reject("Server port is not resolvable!!");
        }
        const app = express();
        app.use((req, res, next) => {
            req.container = container.createScope();
            next();
        })
        app.get('/', (req, res) => {
            res.send("Hi from EXPRESS!")
        });
        app.use('/api', apiRouter);
		app.listen(port, () => {
	        resolve(app);
		});
    });
}

module.exports = server