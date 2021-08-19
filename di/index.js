const awilix = require("awilix");
const serverConfig = require("../config/server-config");
const utility = require('../utils/index')
const container = awilix.createContainer({ injectionMode: awilix.InjectionMode.CLASSIC });

container.register({
    serverConfig: awilix.asValue(serverConfig),
    utility: awilix.asValue(utility)
})

module.exports = container;