const express = require("express");
const bodyparser = require('body-parser');
const path = require('path');
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
        app.use(bodyparser.json());
        app.use((req, res, next) => {
            req.container = container.createScope();
            next();
        })
        app.get('/', (req, res) => {
            res.send("Hi from EXPRESS!");
        });
        app.use('/api', apiRouter);

        // serving static files from the public repo
        app.use(express.static(path.join(__dirname, 'public')));
        app.use((req, res, next) => {
            res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
            // res.status(404).send('<h1>Page not found!</h1>');
        })
		app.listen(port, () => {
	        resolve(app);
		});
    });
}

module.exports = server