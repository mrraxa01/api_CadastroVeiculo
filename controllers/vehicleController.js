const vehicleDAO = require('../dao/vehicleDAO');

class vehicleController{

    createVehicle(require, response){
        vehicleDAO.create(require.body, (err)=>{
            if(!err)
            response.status(201).send({Message: "Saved!"});
        else
            response.status(400).send({error: err});
   
        });
    }

    updateVehicle(require, response){
     
        vehicleDAO.edit(require.params.id, require.body, (err) =>{
            
            if(!err)
             response.status(204).end();
            else 
             response.status(400).send({msg: err});
        }); 
    }

    findAll(require, response){
        
        if(require.query.name){
            vehicleDAO.findByName(require.query.name,(err,data)=>{
                if(data)
                    response.status(200).send(data);
                else
                    response.status(404).send({error: "NOT FOUND!" + err});
            });
        }else{

        vehicleDAO.findAll((err,data)=>{
            if(data)
              response.status(200).send(data);
            else
            response.status(404).send({error: "NOT FOUND!" + err});
        });
    }
    }

    findById(require, response){
        
        vehicleDAO.findById(require.params.id,(err, data)=>{
            if(data)
               response.status(200).send(data);
             else
              response.status(404).send({error: err});

        });
    }

    findByName(require, response){
        
        vehicleDAO.findByName(require.query.name,(err, data) =>{
            if(data)
               response.status(200).send(data);
             else
              response.status(404).send({error: "err"});
        });
    }

    deleteVehicle(require, response){
        vehicleDAO.delete(require.params.id,(err)=>{
            if(!err)
             response.status(204).end();
            else 
           response.status(400).send({msg: err});
        });
    }

}
module.exports = new vehicleController();