const {ulid} = require("ulid");

class vehicle{

    constructor(id, license, manufacturer, model, owner){
        if(id) this.id = ulid();
        else this.id = id;

        this.license = license;
        this.manufacturer = manufacturer;
        this.model = model;
        this.owner = owner;
    }

}