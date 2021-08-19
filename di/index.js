const awilix = require("awilix");
const serverConfig = require("../config/server-config");
const utility = require('../utils/index')
const container = awilix.createContainer({ injectionMode: awilix.InjectionMode.CLASSIC });

// Add all basic config & utility
container.register({
    serverConfig: awilix.asValue(serverConfig),
    utility: awilix.asValue(utility)
})


// Add all the drivers


// Add all the models


// Add all the logic


// Add all the APIs
container.register('getUsers', awilix.asClass(require('../api/v1/getUsers')));

module.exports = container;