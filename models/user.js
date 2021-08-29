const user = (joi) => {
    return joi.object({
        firstName: joi.string().required().max(20),
        lastName: joi.string().required().max(20),
        yob: joi.number().min(1955).max(2003).required(),
        password: joi.string().alphanum().min(8).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });
}

module.exports = user;