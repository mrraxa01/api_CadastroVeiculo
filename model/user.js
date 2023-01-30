const {ulid} = require("ulid");

class user{

    constructor(id, name, email, password){
        if(id) this.id = ulid();
        else this.id = id;

        this.name = name;
        this.email = email;
        this.password = password;
    }
 
}export {user}