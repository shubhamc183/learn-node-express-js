class getUsers{
    constructor(utility){
        this.utility = utility
    }

    async handleRequest(req, res){
        res.send(this.utility.CONSTANTS);
    }
}

module.exports = getUsers;