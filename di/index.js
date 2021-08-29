const awilix = require("awilix");
const serverConfig = require("../config/server-config");
const utility = require('../utils/index')
const models = require('../models');
const container = awilix.createContainer({ injectionMode: awilix.InjectionMode.CLASSIC });

// Add all basic config & utility
container.register({
    serverConfig: awilix.asValue(serverConfig),
    utility: awilix.asValue(utility)
})


// Add all the drivers


// Add all the models
container.register({
    validate: awilix.asValue(models.validator)
});

// Add all the logic


// Add all the APIs
container.register('getUsers', awilix.asClass(require('../api/v1/getUsers')));
container.register('createUser', awilix.asClass(require('../api/v1/createUser')));

module.exports = container;