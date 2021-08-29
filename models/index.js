const joi = require('joi');
const user = require('./user')(joi);

const schemas = {
    user: user
}

const validator = (object, type) => {
    return new Promise((resolve, reject) => {
        if(!object){
            reject(new Error("Object to validate not provided"));
        }
        if(!type){
            reject(new Error("Type to validate not provided"));
        }
        const {error, value} = schemas[type].validate(object);
        if(error){
            reject(new Error(`Invalid ${type} of ${schemas[type]}: ${error}`));
        }
        resolve(value);
    });
}

module.exports= Object({
    schemas: schemas,
    validator: validator
})