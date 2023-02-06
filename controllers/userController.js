const userDAO = require('../dao/userDAO');


class userController{

    createUser(require, response){
       
        userDAO.create(require.body, (err) => {
            if(!err)
                response.status(201).send({Message: 'Saved!'});
            else
                response.status(400).send({error: err});
        });
    }

    getAll(require, response) {

        userDAO.findAll((err,data)=>{
           
            if(data)
                response.status(200).send(data)
            else    
                response.status(204).send({error: "NOT FOUND!" + err})
        });
    }

    removeUser(require, response){
        userDAO.delete(require.params.id, (err)=>{
            if(!err) response.status(204).end();
            else response.status(400).send({msg: err});
        });
    }
    
    editUser(require, response){
        userDAO.edit(require.params.id, require.body, (err)=>{
            if(!err)
             response.status(204).end();
            else 
             response.status(400).send({msg: err});
        
        });
    }


}
module.exports = new userController()