class createUser{
    constructor(utility, validate){
        this.utility = utility;
        this.validate = validate;
    }

    async handleRequest(req, res) {
        console.log(req.body);
        const [err, value] = await this.utility.invoker(this.validate(req.body, 'user'));
        if(err){
            res.status(400);
            return res.send(err.message);
        }
        // logic to add user
        res.status(201)
        return res.send({
            statusCode: 201,
            response: "User created"
        });
    }
}

module.exports = createUser;